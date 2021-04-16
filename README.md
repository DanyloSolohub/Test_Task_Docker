# Test_Task_Docker

1) To start the project you have to clone this repo: 

          git clone https://github.com/DanyloSolohub/Test_Task_Docker REPONAME

2) Open in PyCharm
  Go to Settings -> Project Structure: and remove Content Root

  Add new Content Root from  /../REPONAME/backend

  Then go to Languages & Frameworks -> Django: 
  Press  "Enable Django Support"
  
  Choose Django project root from /../REPONAME/backend/MAIN_APP 
  
  Manage script /../REPONAME/backend/manage.py

  then Add Pipenv Enviroment (Important)

3) Go to /../REPONAME/backend/frontend:

Write in the console: 

                     npm install 
                     
                     npm run build

4) Go to /../REPONAME/:

Write in the console: 
                      
                     sudo docker-compose build

after building:

Write in the console: 

                    sudo docker-compose up

If all is well the server should go up on url "http://0.0.0.0:8000/"

5) then we have to connect to the database and migrate

a)
  to connect we use data from .env.db:
  user: user
  
  password: sdkjfhslkjfgvdjkshkdhgfjhskdvk
  
  port: 3308

  in the docker-compose.yml we redirect the mysql port from 3306 to 3308 so we use 3308
 
 b)  Go to /../REPONAME/:
  Write in the console: 
      
                      docker-compose run --rm web python manage.py makemigrations
  Write in the console:
  
                      docker-compose run --rm web python manage.py migrate
 
 if all is well the database should connect and work together with django
 
 End
 

