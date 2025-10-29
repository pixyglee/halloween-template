import CardList from '@/components/CardList'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { BrushCleaning, Candy, Ghost, Bug } from 'lucide-react'
import React from 'react'

const SingleUserPage = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Pixy</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='mt-4 flex flex-col xl:flex-row gap-8'>
                <div className='w-full xl:w-1/3 space-y-6'>
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <h1 className='text-xl font-semibold'>User Badges</h1>
                        <div className='flex gap-2 mt-4'>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Ghost
                                        size={36}
                                        className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been popular in the community.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy
                                        size={36}
                                        className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been awarded for their contributions.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Bug
                                        size={36}
                                        className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">
                                        Admin users have access to all features and can manage
                                        users.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BrushCleaning
                                        size={36}
                                        className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been verified by the admin.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    <div className='bg-primary-foreground p-4 rounded-lg'>Info</div>
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <CardList title="Recent Transactions" />
                    </div>
                </div>
                <div className='w-full xl:w-2/3 space-y-6'>
                    <div className='bg-primary-foreground p-4 rounded-lg'>User Card</div>
                    <div className='bg-primary-foreground p-4 rounded-lg'>Chart</div>
                </div>

            </div>
        </div>
    )
}

export default SingleUserPage