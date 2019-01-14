<?php
header('Access-Control-Allow-Origin: *');

class Login_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function loginUser($email, $pass)
    {
        $this->load->database();

        $this->db->where("email", $email);
        $this->db->where("password", $pass);
        $query = $this->db->get("user");

        if ($query->num_rows() == 1) {
            return true;
        } else {
            return false;
        }
    }
}