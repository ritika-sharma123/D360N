import json

from flask import request


def list_datasets():
    with open('datasets.json', 'r') as json_file:
        datasets = json.load(json_file)
    list_of_datasets = {"datasets": []}
    for i in datasets["datasets"]:
        print(i)
        list_of_datasets["datasets"].append({"id": i["id"],
                                             "dataset_name": i["dataset_name"],
                                             "dataset_description": i["dataset_description"]})

    return list_of_datasets["datasets"]


def save_dataset(db_details):
    db_details = json.loads(request.data)
    with open('datasets.json', 'r') as json_file:
        datasets = json.load(json_file)

    length = len(datasets["datasets"])
    if db_details["dataset_type"] == "Azure SQL":
        details = {"id": length + 1,
                   "dataset_type": db_details["dataset_type"],
                   "dataset_name": db_details["dataset_name"],
                   "dataset_description": db_details["dataset_description"],
                   "server_name": db_details["server_name"],
                   "database_name": db_details["database_name"],
                   "user_id": db_details["user_id"],
                   "password": db_details["password"]
                   }
        datasets["datasets"].append(details)
    elif db_details["dataset_type"] == "Azure Blob":
        details = {"id": length + 1,
                   "dataset_type": db_details["dataset_type"],
                   "dataset_name": db_details["dataset_name"],
                   "dataset_description": db_details["dataset_description"],
                   "storageAccountName": db_details["storageAccountName"],
                   "mountpoint": db_details["mountpoint"],
                   "blobContainerName": db_details["blobContainerName"],
                   "storageAccountAccessKey": db_details["storageAccountAccessKey"]
                   }
        datasets["datasets"].append(details)

    with open('datasets.json', 'w') as json_file:
        json.dump(datasets, json_file, indent=4)

    return {"status": "Dataset Saved Successfully"}
