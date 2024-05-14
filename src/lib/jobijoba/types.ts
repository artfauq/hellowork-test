import { Ad } from '@src/types'

export type BaseResponse = {
  /**
   * @description Code de retour
   * @example 200
   */
  code: number

  /**
   * @description Message
   * @example 'OK'
   */
  message: string
}

export type LoginResponse = BaseResponse & {
  /**
   * @description Token d’authentification
   */
  token: string
}

export type SearchAdsParams = {
  /**
   * @description Nombre maximum d’annonces dans la réponse
   * @example 1
   */
  limit?: number

  /**
   * @description Numéro de la page
   * @default 1
   */
  page?: number

  /**
   * @description Critère de recherche
   * @example 'Infirmier'
   */
  what: string

  /**
   * @description Critère de recherche
   * @example 'Paris'
   */
  where: string
}

export type SearchAdsResponse = BaseResponse & {
  data: {
    /**
     * @description Nombre total d’annonces
     * @example 24
     */
    total: number

    /**
     * @description Liste des annonces
     */
    ads: Ad[]
  }
}
