package br.com.minhacidade.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.OneToOne

@Entity
class Issue {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id

	@OneToOne
	Category category

	@OneToOne
	Usuario userReport

	@OneToOne
	Usuario userResolved
}
