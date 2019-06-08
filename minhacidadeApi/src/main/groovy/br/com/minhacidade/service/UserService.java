package br.com.minhacidade.service;

import br.com.minhacidade.domain.User;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {

	@Transactional
	public User save(User user) {
		return null;
	}
}
