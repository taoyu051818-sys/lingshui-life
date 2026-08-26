import { createServiceRequest } from '@/app/actions/requests'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function RequestForm(){return <form action={createServiceRequest} className="flex flex-col gap-5"><div className="flex flex-col gap-2"><Label htmlFor="categoryId">服务类别</Label><select id="categoryId" name="categoryId" required className="h-10 rounded-md border bg-background px-3 text-sm"><option value="1">签证与居留</option><option value="2">就业与创业</option><option value="3">医疗健康</option><option value="4">住房生活</option></select></div><div className="flex flex-col gap-2"><Label htmlFor="subject">申请主题</Label><Input id="subject" name="subject" minLength={3} maxLength={120} required placeholder="简要说明你需要的帮助"/></div><div className="flex flex-col gap-2"><Label htmlFor="description">详细情况</Label><Textarea id="description" name="description" minLength={10} maxLength={3000} required rows={7} placeholder="请说明当前情况、期望获得的帮助及相关时间要求"/></div><div className="flex flex-col gap-2"><Label htmlFor="contact">联系方式</Label><Input id="contact" name="contact" required placeholder="手机号或其他方便联系的方式"/></div><Button type="submit">提交申请</Button></form>}
