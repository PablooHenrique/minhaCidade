package br.com.minhacidade.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id
	String descricao
}
