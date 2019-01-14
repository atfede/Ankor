<?php
header('Access-Control-Allow-Origin: *');

class Post_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getPosts()
    {
        $this->load->database();
        $this->db->order_by("date", "DESC");
        $query = $this->db->get('post');

        return $query->result();

        //$query = $this->db->query('SELECT * FROM privateMessage WHERE id = 1');
        //if ($query->num_rows() >= 1) {
        //   return "true";
        //} else {
        //   return "false";
        //}
    }

    //get only logged user messages
    public function getPostsAnswersFromUsers()
    {
        $this->load->database();
        $this->db->order_by("date", "DESC");
        $query = $this->db->get('post_answers');

        return $query->result();
    }

    //get only logged user messages
    public function getSentReceivedMessages($request)
    {
        //SELECT * FROM `private_messages` WHERE `poster_email` = 'a@a.com' or `receiver_email` = 'a@a.com'
        $this->load->database();
//        $this->db->select('*');
        $this->db->from('private_messages');
        $this->db->where('poster_email', $this->input->get('user_email', TRUE));
        $this->db->or_where('receiver_email', $this->input->get('user_email', TRUE));

        //$this->db->where('`poster_email` = ' . $request['user_email'] . ' OR `receiver_email` = ' . $request['user_email']);

        //var_dump($request['user_email']);

        $this->db->order_by("date", "DESC");
        $query = $this->db->get();

        /* $query = $this->db->query("SELECT * FROM `private_messages` WHERE `poster_email` = '" . $request['user_email'][0] .
            "' or `receiver_email` = '" . $request['user_email'][0] . "'");*/

        return $query->result();
    }

    /*   //get only logged user messages
       public function getSentReceivedMessages()
       {
           $this->load->database();
           $this->db->order_by("date", "DESC");
           $query = $this->db->get('private_messages');

           return $query->result();
       }*/

    public function addPost($request)
    {
        $insertStatus = $this->db->insert('post', array(
            'poster_email' => $request['poster_email'],
            'description' => $request['description']
        ));
        return $insertStatus;
    }

    public function deletePost($post)
    {
        $this->db->where('id', $post['id']);
        $this->db->where('poster_email', $post['poster_email']);
        $this->db->delete('post');

        return $this->db->affected_rows();
    }

    //no elimino más, actualizo poster_deleted_msg a true
    public function deletePrivateMessage($post)
    {
        $this->db->where('id', $post['id']);
        $this->db->where('poster_email', $post['poster_email']);
        $this->db->delete('private_messages');

        return $this->db->affected_rows();
    }

    public function updatePosterPrivateMessageDeleted($post)
    {
        $this->db->where('id', $post["id"]);
        $this->db->where('poster_email', $post['poster_email']);
        $this->db->set("poster_deleted_msg", 1);
        $this->db->update('private_messages');

        return $this->db->affected_rows();
    }

    public function updateReceiverPrivateMessageDeleted($post)
    {
        $this->db->where('id', $post["id"]);
        $this->db->where('receiver_email', $post['receiver_email']);
        $this->db->set("receiver_deleted_msg", 1);
        $this->db->update('private_messages');

        return $this->db->affected_rows();
    }

    public function addAnswerToPost($request)
    {
        $insertStatus = $this->db->insert('post_answers', array(
            'post_id' => $request['post_id'],
            'poster_email' => $request['poster_email'],
            'receiver_email' => $request['receiver_email'],
            'description' => $request['description']
        ));
        return $insertStatus;
    }

    public function addPrivateMessage($request)
    {
        $insertStatus = $this->db->insert('private_messages', array(
            'poster_email' => $request['poster_email'],
            'receiver_email' => $request['receiver_email'],
            'description' => $request['description']
        ));
        return $insertStatus;
    }
}