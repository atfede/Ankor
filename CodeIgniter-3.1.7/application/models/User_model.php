<?php
header('Access-Control-Allow-Origin: *');

class User_model extends CI_model
{
    public function register_user($request)
    {
        $insertStatus = $this->db->insert('user', array(
            'email' => $request['email'],
            'password' => $request['pass'],
            'user_name' => $request['userName'],
            'age' => $request['age'],
            'gender' => $request['gender'],
            'country' => $request['country']
        ));
        return $insertStatus;
    }

    public function login_user($email, $pass)
    {
        $this->db->select('*');
        $this->db->from('user');
        $this->db->where('poster_email', $email);
        $this->db->where('user_password', $pass);

        if ($query = $this->db->get()) {
            return $query->row_array();
        } else {
            return false;
        }
    }

    function getProfiles(){
        $this->db->select("id, email, user_name, age, gender, country, city, is_professional, date_registered, about_me");
        $this->db->from('user');
        $query = $this->db->get();
        return $query->result();
    }

 /*   public function getProfiles()
    {
        $this->load->database();
        $query = $this->db->get('user');
        return $query->result();
    }*/

    public function getInstruments()
    {
        $this->load->database();
        $query = $this->db->get('instruments');
        return $query->result();
    }

    public function getStyles()
    {
        $this->load->database();
        $query = $this->db->get('styles');
        return $query->result();
    }

    public function getUserInstruments()
    {
        $this->load->database();
        $query = $this->db->get('user_instruments');
        return $query->result();
    }

    public function getUserStyles()
    {
        $this->load->database();
        $query = $this->db->get('user_styles');
        return $query->result();
    }

    public function getUserInfluences()
    {
        $this->load->database();
        $query = $this->db->get('user_influences');
        return $query->result();
    }

}