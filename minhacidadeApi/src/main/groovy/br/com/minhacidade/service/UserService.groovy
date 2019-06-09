package br.com.minhacidade.service

import br.com.minhacidade.domain.Usuario
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

import javax.transaction.Transactional

@Service
class UserService {

	@Autowired
	UserRepository userRepository

	@Transactional
	public Usuario save(Usuario user) {
		return null;
	}

	public Usuario login(String cpf, String senha) {
		return userRepository.findByCpfAndSenha(cpf, senha)
	}
}
