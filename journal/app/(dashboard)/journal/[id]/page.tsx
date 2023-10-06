import { Editor } from '@/components'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'


const getEntry = async (id) => {
    const user = await getUserByClerkId()
    const entry = await prisma.journalEntry.findUnique({
        where: { 
            userId_id: { // this is now a complex variable since in the schema we did '@@unique([userId, id])' for JournalEntry 
                userId: user.id,
                id,
            },
        },            
        include: {
            analysis: true,
        },
    })

    return entry
}

const EntryPage = async ({params}) => {
    // params.id because the page is name id, as in the folder

    // I can pass serializable data from server component to client component, like in this case passing 'entry'
    const entry = await getEntry(params.id)
 
    return (
        <div className="h-full w-full">
                <Editor entry={entry} />                        
        </div>
    )
}

export default EntryPage