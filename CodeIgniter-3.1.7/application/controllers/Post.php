<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header("Content-Type: application/json");

class Post extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        //$this->load->view("login");
    }

    //logueamos usuarios con codeigniter y angularjs
    public function getPosts()
    {
        $this->load->model("Post_model");
        $posts = $this->Post_model->getPosts();

        if (!empty($posts)) {
            echo json_encode($posts);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }

        //echo $this->db->last_query();
    }

    //logueamos usuarios con codeigniter y angularjs
    public function getPostsAnswersFromUsers()
    {
        $this->load->model("Post_model");
        $posts = $this->Post_model->getPostsAnswersFromUsers();

        if (!empty($posts)) {
            echo json_encode($posts);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }

        //echo $this->db->last_query();
    }

    public function getSentReceivedMessages()
    {
        $this->load->model("Post_model");
        $request = json_decode(file_get_contents('php://input'), TRUE);
        $posts = $this->Post_model->getSentReceivedMessages($request);

        if (!empty($posts)) {
            echo json_encode($posts);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }
    }

/*    public function getSentReceivedMessages()
    {
        $this->load->model("Post_model");
        $posts = $this->Post_model->getSentReceivedMessages();

        if (!empty($posts)) {
            echo json_encode($posts);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }
    }*/

    //logueamos usuarios con codeigniter y angularjs
    public function getPostAnswers()
    {
        $this->load->model("Post_model");
        $posts = $this->Post_model->getPostAnswers();

        if (!empty($posts)) {
            echo json_encode($posts);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }

        //echo $this->db->last_query();
    }

    public function addPost()
    {
        $this->load->model("Post_model");

        $request = json_decode(file_get_contents('php://input'), TRUE);
        $affectedRows = $this->Post_model->addPost($request);

        if (!$affectedRows) {
            $result = 'Error';
        } else {
            $result = 'Success';
        }
        return $result;
    }

    public function deletePost()
    {
        $this->load->model("Post_model");
        $request = json_decode(file_get_contents('php://input'), TRUE);
        $affectedRows = $this->Post_model->deletePost($request);

        if (!$affectedRows) {
            $result = 'Error';
        } else {
            $result = 'Success';
        }
        return $result;
    }

    public function deletePrivateMessage()
    {
        $this->load->model("Post_model");
        $request = json_decode(file_get_contents('php://input'), TRUE);
        $affectedRows = $this->Post_model->deletePrivateMessage($request);

        if (!$affectedRows) {
            $result = 'Error';
        } else {
            $result = 'Success';
        }
        return $result;
    }

    //no elimino más, actualizo poster_deleted_msg a true
    public function updatePosterPrivateMessageDeleted()
    {
        $this->load->model("Post_model");
        $request = json_decode(file_get_contents('php://input'), TRUE);
        $affectedRows = $this->Post_model->updatePosterPrivateMessageDeleted($request);

        if (!$affectedRows) {
            $result = 'Error';
        } else {
            $result = 'Success';
        }
        return $result;
    }

    //no elimino más, actualizo poster_deleted_msg a true
    public function updateReceiverPrivateMessageDeleted()
    {
        $this->load->model("Post_model");
        $request = json_decode(file_get_contents('php://input'), TRUE);
        $affectedRows = $this->Post_model->updateReceiverPrivateMessageDeleted($request);

        if (!$affectedRows) {
            $result = 'Error';
        } else {
            $result = 'Success';
        }
        return $result;
    }

    public function addPrivateMessage()
    {
        $this->load->model("Post_model");

        $request = json_decode(file_get_contents('php://input'), TRUE);
        $affectedRows = $this->Post_model->addPrivateMessage($request);

        if (!$affectedRows) {
            $result = 'Error';
        } else {
            $result = 'Success';
        }
        return $result;
    }

/*    public function addAnswerToPost()
    {
        $this->load->model("Post_model");

        $request = json_decode(file_get_contents('php://input'), TRUE);
        $affectedRows = $this->Post_model->addAnswerToPost($request);

        if (!$affectedRows) {
            $result = 'Error';
        } else {
            $result = 'Success';
        }
        return $result;
    }*/
}