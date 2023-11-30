FROM python:3.6-slim-buster

WORKDIR /app

COPY MSVehiculos/requirements.txt ./

RUN pip install -r requirements.txt

RUN pip install flask-cors

COPY MSVehiculos .

EXPOSE 4000

CMD [ "flask", "run", "--host=0.0.0.0", "--port=4000" ]