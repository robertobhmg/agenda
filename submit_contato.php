<?php
    include ("config.php");
    $sql = "INSERT INTO MyGuests (nome, endereco, numero, complemento, bairro, cep, cidade, estado, telefone, cel_1, cel_2, email, mensagem)
    VALUES ('John', 'Doe', '333', 'casa', 'centro', '2222','Belo Horizonte', 'MG', '22222', '22222', '222222', 'woi@oi.com.br', 'sssss')";
    
    if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    
    mysqli_close($conn);
    ?>