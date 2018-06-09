<?php 

class Property_Model extends CI_Model{

    public function get(){
        return 'get';
    }

    public function insert($data) {
        $this->db->insert('Property', $data);
        return $this->db->insert_id();
    }

    public function search($where) {
        return 'search'.$where;
    }

    public function update($data, $where) { 
        return 'update'.$data.$where;
    }

    public function delete($where) {
        return 'delete'.$where;
    }

    public function find_what_and_where($what, $where){
        return 'find_what_and_where'.$what.$where;
    }
}