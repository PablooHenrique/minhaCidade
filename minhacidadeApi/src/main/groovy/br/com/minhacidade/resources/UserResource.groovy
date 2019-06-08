package br.com.minhacidade.resources

import br.com.minhacidade.domain.User
import br.com.minhacidade.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.util.UriComponentsBuilder

@RestController
@RequestMapping(value = "/user")
class UserResource {

	@Autowired
	UserService userService

	ResponseEntity<?> save(final User user, final UriComponentsBuilder ucBuilder) {
		final User saved = userService.save(user)
		final HttpHeaders headers = new HttpHeaders()
		headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(saved.getId()).toUri())
		return new ResponseEntity<HttpHeaders>(headers, HttpStatus.CREATED)
	}
}
