<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

class Login extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
    }

    public function index()
    {
        //$this->load->view("login");
    }

    //logueamos usuarios con codeigniter y angularjs
    public function loginUser()
    {
        if ($this->input->post("email") && $this->input->post("pass")) {

            $this->load->model("Login_model");
            $email = $this->input->post("email");
            $pass = $this->input->post("pass");
            $loginUser = $this->Login_model->loginUser($email, $pass);

            if ($loginUser === true) {
                echo json_encode(array("respuesta" => "success"));
            } else {
                echo json_encode(array("respuesta" => "failed"));
            }
        } else {
            echo json_encode(array("respuesta" => "yaqyese")); //incomplete_form
        }
    }

    public function logOutUser()
    {
        $this->session->sess_destroy();
    }
}