pipeline{
    agent any
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
                bat 'mvn install -DskipTests --file ./wishlist-app-backend'
                bat 'npm install %WORKSPACE%\\wishlist-app-frontend'
            }
        }
        stage('Testing backend'){
            steps{
                echo 'Running backend tests'
                bat 'mvn test --file ./wishlist-app-backend'
                junit allowEmptyResults: true, testResults: '**\\surefire-reports\\**.xml'
                echo 'Backend tests finished execution'
            }
        }
        stage('Testing frontend'){

            steps{
                echo "Testing frontend ${TESTING_FRONTEND}"
            }
        }
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
            		bat 'docker build -t xrubyn/jenkins-front:latest ./wishlist-app-frontend'
            	}
        	}
        	stage('login-front'){
        			steps {
        			 //   bat 'echo %DOCKERHUB_CREDENTIALS_PSW%'
        			 //   bat 'echo %DOCKERHUB_CREDENTIALS_USR%'
        	   //         bat 'echo %env.DOCKERHUB_CREDENTIALS%'
        				bat 'echo %DOCKERHUB_CREDENTIALS_PSW%|docker login -u %DOCKERHUB_CREDENTIALS_USR% --password-stdin'
        			}
        		}
        	stage('pushing-front'){
        		steps {
        			bat 'docker push xrubyn/jenkins-front:latest'
        		}
        	}

            stage('docker-back'){
            	steps {
            		bat 'docker build -t xrubyn/jenkins-back:latest ./wishlist-app-backend'
            	}
        	}
        	stage('login-back'){
        			steps {
        			 //   bat 'echo %DOCKERHUB_CREDENTIALS_PSW%'
        			 //   bat 'echo %DOCKERHUB_CREDENTIALS_USR%'
        	   //         bat 'echo %env.DOCKERHUB_CREDENTIALS%'
        				bat 'echo %DOCKERHUB_CREDENTIALS_PSW%|docker login -u %DOCKERHUB_CREDENTIALS_USR% --password-stdin'
        			}
        		}
        	stage('pushing-back'){
        		steps {
        			bat 'docker push xrubyn/jenkins-back:latest'
        		}
        	}

    }
    post{
		always {
			bat 'docker logout'
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