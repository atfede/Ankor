<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

class Meta extends CI_Controller
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
    public function addMeta()
    {
        if ($this->input->post("cliente_nombre") && $this->input->post("valor")) {

            $this->load->model("Metas_model");
            $cliente_nombre = $this->input->post("cliente_nombre");
            $valor = $this->input->post("valor");
            $result = $this->Metas_model->addMeta($cliente_nombre, $valor);

            if ($result === true) {
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
