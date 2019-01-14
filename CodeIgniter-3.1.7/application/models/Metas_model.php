<?php
header('Access-Control-Allow-Origin: *');

class Metas_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getMeta($cliente_nombre)
    {
        $this->load->database();
        $this->db->where("cliente_nombre", $cliente_nombre);
        $query = $this->db->get("user");

        if ($query->num_rows() == 1) {
            return true;
        } else {
            return false;
        }
    }

    public function addMeta($request)
    {
        $insertStatus = $this->db->insert('metas', array(
            'cliente_nombre' => $request['cliente_nombre'],
            'valor' => $request['valor']
        ));
        return $insertStatus;
    }
}