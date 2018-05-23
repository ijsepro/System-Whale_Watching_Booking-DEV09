<?php

class Manage_File_Model extends CI_Model {

    public function saveFile($file) {
        $path = dirname(__FILE__) .'\\files\\';
        if (isset($file) && is_writable($path) && move_uploaded_file($file['tmp_name'], $path.md5($file['tmp_name']).'.'.pathinfo($file['name'], PATHINFO_EXTENSION))) {
            return array('status' => true, 'file_path' => $path.md5($file['tmp_name']).'.'.pathinfo($file['name'], PATHINFO_EXTENSION));
        } else {
            return array(false);
        }
    }

}