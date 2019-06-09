package br.com.minhacidade.service

import br.com.minhacidade.domain.Usuario
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository extends JpaRepository<Usuario, Long> {
	Usuario findByCpfAndSenha(final String cpf, final String senha)
}