pipeline{
    agent any
        environment{
        ON_SUCCESS_SEND_EMAIL='true'
        ON_FAILURE_SEND_EMAIL='true'
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
    }
    post{
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