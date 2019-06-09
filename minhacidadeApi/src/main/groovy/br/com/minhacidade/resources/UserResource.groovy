package br.com.minhacidade.resources

import br.com.minhacidade.domain.Usuario
import br.com.minhacidade.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.util.UriComponentsBuilder

@RestController
@RequestMapping(value = "/user")
class UserResource {

	@Autowired
	UserService userService

	@RequestMapping(method = RequestMethod.POST)
	ResponseEntity<?> save(final Usuario user, final UriComponentsBuilder ucBuilder) {
		final Usuario saved = userService.save(user)
		final HttpHeaders headers = new HttpHeaders()
		headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(saved.getId()).toUri())
		return new ResponseEntity<HttpHeaders>(headers, HttpStatus.CREATED)
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	ResponseEntity<?> login(final String cpf, final String senha) {
		final Usuario user = userService.login(cpf, senha)
		if (user == null) {
			return new ResponseEntity<Object>(HttpStatus.FORBIDDEN)
		} else {
			return new ResponseEntity<Object>(user, HttpStatus.OK)
		}
	}
}
