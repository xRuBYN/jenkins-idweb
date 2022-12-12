pipeline{
    agent any


    //tools uses for can run any comand from maven or nodejs for example "mvn clean install"
    //use this config from global configuration need have plugins
    tools{
        maven'Mavenconfig'
        nodejs'Nodeconfig'

    }


    environment{
        ON_SUCCESS_SEND_EMAIL='true'
        ON_FAILURE_SEND_EMAIL='true'
        DOCKERHUB_CREDENTIALS=credentials('xrubyn-dockerhub')
    }


    parameters{
        booleanParam(name:'CLEAN_WORKSPACE', defaultValue:false, description:'')
        booleanParam(name:'TESTING_FRONTEND', defaultValue:false, description:'')
    }
    stages{

        stage('Git checkout'){
            steps{
                git branch:'master',url: 'https://github.com/xRuBYN/jenkins-idweb'
            }
        }



        stage('Build'){
            steps{
                echo 'Building'
                sh 'mvn install -DskipTests --file ./wishlist-app-backend'
                sh 'npm install ./wishlist-app-frontend'
            }
        }


        stage('Testing backend'){
            steps{
                echo 'Running backend tests'
                sh 'mvn test --file ./wishlist-app-backend'
                junit allowEmptyResults: true, testResults: '**\\surefire-reports\\**.xml'
                echo 'Backend tests finished execution'
            }
        }


        stage('Testing frontend'){
            steps{
                echo "Testing frontend ${TESTING_FRONTEND}"
            }
        }

        //when the clean_workspace env.varibale is true we delete recursive work directory
        stage('Delete workspace'){
            when{
                expression { CLEAN_WORKSPACE == "true" }
            }
            steps{
                echo "Deleting workspace ${CLEAN_WORKSPACE}"
                deleteDir()
            }
        }

        stage('docker-front'){
        	steps {
        		sh 'docker build -t xrubyn/jenkins-front:latest ./wishlist-app-frontend'
        	}
    	}

    	stage('login-front'){
			steps {
			    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
    	}

    	stage('pushing-front'){
    		steps {
    			sh 'docker push xrubyn/jenkins-front:latest'
    		}
    	}

    	stage('login-back'){
			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
    	}

        stage('docker-back'){
        	steps {
        		sh 'docker build -t xrubyn/jenkins-back:latest ./wishlist-app-backend'
        	}
    	}
    	stage('pushing-back'){
    		steps {
    			sh 'docker push xrubyn/jenkins-back:latest'
    		}
        }

    	stage('test_machine') {

            steps{
                sshagent(credentials: ['dev-deploy']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l parallels 10.211.55.9 sh -c "docker-compose stop && docker-compose rm -f && docker-compose pull && docker-compose up -d"'
                }
            }

        }

    }
    post{
		always {
			sh 'docker logout'
		}

        success{
            emailext body: "Build finished successfully, see ${BUILD_URL}",
            subject: "Jenkins Build ${currentBuild.currentResult} : Job ${env.JOB_NAME} Build Number ${env.BUILD_NUMBER}",
            to: 'rubikcybic@gmail.com'
        }
        failure{
            emailext body: "Build finished successfully, see ${BUILD_URL}",
            subject: "Jenkins Build ${currentBuild.currentResult} : Job ${env.JOB_NAME} Build Number ${env.BUILD_NUMBER}",
            to: 'rubikcybic@gmail.com'
        }
    }
}