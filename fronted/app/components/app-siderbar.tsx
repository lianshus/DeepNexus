import { Home, Inbox, Search, Settings, BookAIcon } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem
} from "@/components/ui/sidebar"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

// Menu items.
const items = [
    {
        title: "Welcome to DeepSync",
        url: "introduction",
        icon: Home,
        children: [
            {
                title: "Introduction",
                url: "#",
            },
            {
                title: "Example",
                url: "#",
            },
            {
                title: "How to use it?",
                url: "#",
            },
        ],
    },
    {
        title: "Users",
        url: "#",
        icon: BookAIcon,
    },
    {
        title: "Developers",
        url: "#",
        icon: Inbox,
    },

    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export default function AppSidebar() {
    return (
        
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Deep Sync</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <Collapsible defaultOpen className="group/collapsible">


                                    <SidebarMenuItem key={item.title}>
                                        <CollapsibleTrigger asChild>

                                            <SidebarMenuButton asChild>
                                                <a href={item.url}>
                                                    {/* <item.icon /> */}
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        {item.children && (
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.children.map((subItem) => (
                                                        <SidebarMenuSubItem key={subItem.title}>
                                                            <a href={subItem.url}>{subItem.title}</a>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        )}
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>


                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
