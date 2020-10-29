import { Request, Response } from 'express'
import { getRepository } from "typeorm";

import Orphange from '../models/Orphanage';

export default {

  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphange);

    const orphanges = await orphanagesRepository.find();

    return response.json(orphanges)
  },

  async show(request: Request, response: Response) {
    const { id } = request.params
    const orphanagesRepository = getRepository(Orphange);

    const orphange = await orphanagesRepository.findOneOrFail(id);

    return response.json(orphange)
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = request.body;


    const orphanagesRepository = getRepository(Orphange)

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    const orphange = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images

    });

    await orphanagesRepository.save(orphange)

    return response.status(201).json(orphange);


  }
}