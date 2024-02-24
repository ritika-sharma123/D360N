import subprocess


def azlogin():
    try:
        subprocess.run(['az','login'], check=True, shell=True,stdout=subprocess.PIPE)
        return {"status":"Succesfully Logged in"}
    except Exception as e:
        print(f"Error in execution: {e}")
        return {"status":"Credential Mismatch"}


