FROM python:3.9-slim
# all paths will start at /app in the container
WORKDIR /app 
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8000
# app.py is entry point
CMD ["python", "src/app.py"]