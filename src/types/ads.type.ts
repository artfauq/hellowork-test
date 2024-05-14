export type Ad = {
  /**
   * @description Identifiant de l’annonce
   */
  id: string

  /**
   * @description Lien de l’annonce
   */
  link: string

  /**
   * @description Titre de l’annonce
   */
  title: string

  /**
   * @description Description de l’annonce
   */
  description: string

  /**
   * @description Date de publication de l’annonce
   */
  publicationDate: string

  /**
   * @description Coordonnées de l’annonce
   */
  coordinates: string

  /**
   * @description Ville de l’annonce
   */
  city: string

  /**
   * @description Code postal de l’annonce
   */
  postalCode: string

  /**
   * @description Département de l’annonce
   */
  department: string

  /**
   * @description Région de l’annonce
   */
  region: string

  /**
   * @description Secteur de l’annonce
   */
  sector: string

  /**
   * @description Intitulé du poste
   */
  jobtitle: string

  /**
   * @description Nom de l’entreprise
   */
  company: string

  /**
   * @description Type de contrat
   */
  contractType: string[]

  /**
   * @description Salaire
   */
  salary: string
}
