FROM python:3.6-slim-buster

WORKDIR /app

COPY MSFabricantes/requirements.txt ./

RUN pip install -r requirements.txt

RUN pip install flask-cors

COPY MSFabricantes .

EXPOSE 4001

CMD [ "flask", "run", "--host=0.0.0.0", "--port=4001" ]