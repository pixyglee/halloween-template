import CardList from '@/components/CardList'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BrushCleaning, Candy, Ghost, Bug } from 'lucide-react'
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AppLineChart from '@/components/AppLineChart'

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
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl font-semibold'>User Information</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>Edit User</Button>
                                </SheetTrigger>
                                <EditUser />
                            </Sheet>
                        </div>
                        <div className='space-y-4 mt-4'>
                            <div className='flex flex-col gap-2 mb-8'>
                                <p className='text-sm text-muted-foreground'>Profile Completion</p>
                                <Progress value={33} />
                            </div>
                            <div className='flex item-center gap-2'>
                                <span className='font-bold'>Username:</span>
                                <span>pixy</span>
                            </div>
                            <div className='flex item-center gap-2'>
                                <span className='font-bold'>Email:</span>
                                <span>pixy@gmail.com</span>
                            </div>
                            <div className='flex item-center gap-2'>
                                <span className='font-bold'>Phone No:</span>
                                <span>+1 234 567 890</span>
                            </div>
                            <div className='flex item-center gap-2'>
                                <span className='font-bold'>Location:</span>
                                <span>Venus</span>
                            </div>
                            <div className='flex item-center gap-2'>
                                <span className='font-bold'>Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className='text-sm text-muted-foreground mt-4'>Joined on 2025.06.12</p>
                    </div>
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <CardList title="Recent Transactions" />
                    </div>
                </div>
                <div className='w-full xl:w-2/3 space-y-6'>
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <Avatar className='size-12'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>Pixy</AvatarFallback>
                            </Avatar>
                            <h1 className='text-xl font-semibold'>Pixy</h1>
                        </div>
                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ad, blanditiis error. Necessitatibus, cum! Alias aperiam porro incidunt. 
                            Quis autem expedita quasi fuga aspernatur! Repudiandae iste maxime omnis aliquid, rerum assumenda,
                            velit quam perferendis deserunt ut veritatis dolores exercitationem vero praesentium explicabo fugiat 
                            libero delectus, minus magni voluptatem dolorum quia provident.
                        </p>
                    </div>
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <h1 className='text-xl font-semibold mb-4'>User Activity</h1>
                        <AppLineChart/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleUserPage