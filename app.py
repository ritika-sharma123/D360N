from flask import Flask, request, render_template, session, redirect, url_for, Response, jsonify
import os
from azure.identity import DefaultAzureCredential
from azure.mgmt.datafactory import DataFactoryManagementClient
from azure.mgmt.datafactory.models import RunFilterParameters, DatasetReference
from datetime import datetime
from datetime import timedelta
import json


app = Flask(__name__)
app.secret_key = os.urandom(12)


@app.route('/landing_page')
def test():
    for i in range(0,100):
        print(i)
    return "done"





def trigger_pipeline(pipeline_name, parameters):
    subscription_id = "8d63c2a6-9024-4e26-84b4-74865cdbf4fd"
    credentials = DefaultAzureCredential()
    datafactory_client = DataFactoryManagementClient(credentials, subscription_id)
    resource_group_name = "rg-datalake"
    data_factory_name = "adfdatalakedev"

    run_response = datafactory_client.pipelines.create_run(resource_group_name, data_factory_name,
                                                           pipeline_name,
                                                           parameters=parameters)
    run_id = run_response.run_id
    return run_id


parameters = {
            "server_name": "asddatalake.database.windows.net",
            "database_name": "DLXpressAZSQL",
            "mnt_point": "dbfs:/mnt/new_mount/",
            "user_id":"etluser",
            "integration_name":"Test_integration",
            "password":"etl@1234abcd#",
            "business_file_name":"businessfile"
        }

@app.route('/execute_pipeline/<pipeline_name>', methods=['GET', 'POST'])
def pipeline_execution(pipeline_name):
    run_id = trigger_pipeline(pipeline_name, parameters)
    return {"run_id":run_id}


def generate(datafactory_client,resource_group_name,data_factory_name,pipeline_run_id):
    i = 0
    while True:
        filter_params = RunFilterParameters(
            last_updated_after=datetime.now() - timedelta(days=1),
            last_updated_before=datetime.now()
        )
        activity_runs_response = datafactory_client.activity_runs.query_by_pipeline_run(
            resource_group_name,
            data_factory_name,
            pipeline_run_id, filter_params)


        pipeline_run_response = datafactory_client.pipeline_runs.get(
            resource_group_name,
            data_factory_name,
            pipeline_run_id
        )
        pipeline_run_status = pipeline_run_response.status
        return activity_runs_response,pipeline_run_response,pipeline_run_status


@app.route('/execution_status/<run_id>')
def progress(run_id):
    subscription_id = "8d63c2a6-9024-4e26-84b4-74865cdbf4fd"
    resource_group_name = "rg-datalake"
    data_factory_name = "adfdatalakedev"
    credentials = DefaultAzureCredential()
    datafactory_client = DataFactoryManagementClient(credentials, subscription_id)
    pipeline_run_id = run_id
    activity_runs_response,pipeline_run_response, pipeline_run_status=generate(datafactory_client,resource_group_name,data_factory_name,pipeline_run_id)

    def status(i):
        print(activity_runs_response.value[i].status)

    current_len=len(activity_runs_response.value)
    if current_len==1:
        raw_status = activity_runs_response.value[0].status
        silver_status="Queued"
        gold_status = "Queued"

    if current_len==2:
        raw_status=activity_runs_response.value[0].status
        silver_status = activity_runs_response.value[1].status
        gold_status = "Queued"

    if current_len==3:
        raw_status=activity_runs_response.value[0].status
        silver_status = activity_runs_response.value[1].status
        gold_status = activity_runs_response.value[2].status
    print(raw_status)
    print(silver_status)
    print(gold_status)






    return {"raw_status":raw_status,"silver_status":silver_status,"gold_status":gold_status}



if __name__ == "__main__":
    app.run(debug=True)