<?php

class User extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $this->load->model('user_model');
        $this->load->library('session');
    }

    public function index()
    {
        //$this->load->view("register.php");
    }

    public function registeruser()
    {
        $this->load->model('User_model');

        $request = json_decode(file_get_contents('php://input'), TRUE);
        $data = $this->User_model->register_user($request);

        if ($data) {
            echo "success";
        } else {
            echo "fail";
        }
    }

    function login_user()
    {
        $user_login = array(
            'poster_email' => $this->input->post('poster_email'),
            'user_password' => md5($this->input->post('user_password'))

        );

        $data = $this->user_model->login_user($user_login['poster_email'], $user_login['user_password']);
        if ($data) {
            $this->session->set_userdata('user_id', $data['user_id']);
            $this->session->set_userdata('poster_email', $data['poster_email']);
            $this->session->set_userdata('user_name', $data['user_name']);
            $this->session->set_userdata('user_age', $data['user_age']);
            $this->session->set_userdata('user_mobile', $data['user_mobile']);

            $this->load->view('user_profile.php');

        } else {
            $this->session->set_flashdata('error_msg', 'Error occured,Try again.');
            $this->load->view("login.php");
        }
    }

    public function getProfiles()
    {
        $this->load->model("User_model");
        $profiles = $this->User_model->getProfiles();

        if (!empty($profiles)) {
            echo json_encode($profiles);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }
    }

    public function getInstruments()
    {
        $this->load->model("User_model");
        $instruments = $this->User_model->getInstruments();

        if (!empty($instruments)) {
            echo json_encode($instruments);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }
    }

    public function getStyles()
    {
        $this->load->model("User_model");
        $styles = $this->User_model->getStyles();

        if (!empty($styles)) {
            echo json_encode($styles);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }
    }

    public function getUserInstruments()
    {
        $this->load->model("User_model");
        $userInstruments = $this->User_model->getUserInstruments();

        if (!empty($userInstruments)) {
            echo json_encode($userInstruments);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }
    }

    public function getUserStyles()
    {
        $this->load->model("User_model");
        $userStyles = $this->User_model->getUserStyles();

        if (!empty($userStyles)) {
            echo json_encode($userStyles);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }
    }

    public function getUserInfluences()
    {
        $this->load->model("User_model");
        $userInfluences = $this->User_model->getUserInfluences();

        if (!empty($userInfluences)) {
            echo json_encode($userInfluences);
        } else {
            echo json_encode(array("respuesta" => "failed"));
        }
    }


}