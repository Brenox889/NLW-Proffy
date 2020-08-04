import {Request, Response} from 'express'
import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem{
    week_day: number;
    from:string,
    to: string
}

export default class ClassesController{
   async index(req:Request, res:Response){
       const filters = req.query

       const subject = filters.subject as string
       const week_day = filters.subject as string
       const time = filters.time as string
       if(!filters.week_day || !filters.subject || !filters.time){
           return res.status(400).json({
               error:'Missing filters to search classes'
           })
       }
       const timeInMinutes = convertHourToMinutes(time)

       const classes = await db('classes')
            .where('classes.subject', '=', subject)
   }
    async create(req:Request, res:Response){
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body
    
        const trx = await db.transaction()
    
       try{const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio
    })
    
    const user_id = insertedUsersIds[0]
    
    const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id
    })
    
    const class_id = insertedClassesIds[0]
    
    const classSchedule = schedule.map((scheduleItem:ScheduleItem) =>{
        return{
            class_id,
            week_day: scheduleItem.week_day,
            from: convertHourToMinutes(scheduleItem.from),
            to: convertHourToMinutes(scheduleItem.to)
    }
    })
            await trx('class_schedules').insert(classSchedule)
    
            await trx.commit()
    
            return res.status(201).send();
        
    
        } catch(err){
            await trx.rollback()
    
            return res.status(400).json({
                error:'Unexpected error'
            })
        }
    
    }
}