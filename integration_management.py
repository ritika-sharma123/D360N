import json

from flask import request


def list_intergations():
    with open('integrations.json', 'r') as json_file:
        integrations = json.load(json_file)
    list_of_integrations={"integrations":[]}
    for i in integrations["integrations"]:
        print(i)
        list_of_integrations["integrations"].append({"id":i["id"],
                                "integration_name":i["integration_name"],
                             "integration_description":i["integration_description"]})

    return list_of_integrations["integrations"]



def save_integration(integration_details):
    integration_details = json.loads(request.data)
    with open('integrations.json', 'r') as json_file:
        integrations = json.load(json_file)

    length = len(integrations["integrations"])

    details = {"id": length + 1,
               "integration_method":integration_details["integration_method"],
               "integration_name": integration_details["integration_name"],
               "integration_description": integration_details["integration_description"],
               "source_dataset": integration_details["source_dataset"],
               "target_dataset": integration_details["target_dataset"]
               }
    integrations["integrations"].append(details)


    with open('integrations.json', 'w') as json_file:
        json.dump(integrations, json_file, indent=4)

    return {"status": "Integration Saved Successfully"}