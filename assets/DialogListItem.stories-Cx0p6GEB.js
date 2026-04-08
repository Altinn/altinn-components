import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-CpyhhMkF.js";import{t as r}from"./jsx-runtime-DwqL_Y-t.js";import{s as i}from"./ListItem-DAJg57C2.js";import{t as a}from"./DialogListItem-D6k4xXOW.js";import{t as o}from"./ContextMenu-BispZrd8.js";import{t as s}from"./MetaItem-CjuEmKUN.js";import{t as c}from"./List-BNjZuxCc.js";import{t as l}from"./contextMenu-BZeaGPnI.js";import{n as u}from"./seenByLog-pH6EgWDf.js";import{t as d}from"./skatt-Blgau9wG.js";var f=t({Archived:()=>F,AsLink:()=>U,AttachmentsCount:()=>O,AttachmentsLabel:()=>k,Completed:()=>D,CustomControls:()=>W,Default:()=>_,Draft:()=>A,DraftAndStatus:()=>j,DueAt:()=>T,GroupedAvatars:()=>C,HighlightWords:()=>G,InProgress:()=>E,Loading:()=>R,LongSummary:()=>B,LongTitle:()=>z,MarkedAsUnread:()=>S,ReceivedCount:()=>N,RequiresAttention:()=>w,SeenByEndUser:()=>y,SeenByMultiple:()=>b,Selectable:()=>V,SentCount:()=>M,Sizes:()=>H,Transmissions:()=>P,Trashed:()=>I,UnopenedContent:()=>x,Unread:()=>v,WithTooltips:()=>L,__namedExportsOrder:()=>K,default:()=>g}),p=e(n(),1),m=r(),h=[`xl`,`lg`,`md`,`sm`,`xs`],g={title:`Inbox/DialogListItem`,component:a,tags:[`autodocsi`,`beta`],argTypes:{},args:{title:`Title`,summary:`Summary`,sender:d,recipient:{type:`person`,name:`Recipient name`},updatedAt:`2024-11-25 15:30`,updatedAtLabel:`25. november 2024 kl 15.30`,status:{}},decorators:[e=>(0,m.jsx)(`div`,{style:{backgroundColor:`var(--ds-color-background-tinted)`,padding:`.5em`},children:(0,m.jsx)(c,{children:(0,m.jsx)(e,{})})})]},_={args:{}},v={args:{unread:!0,badge:{label:`Ny`}}},y={args:{seenByLog:{title:`Sett av bruker`,items:[{id:`1`,name:`John Doe`,seenAt:`2024-11-25 15:30`,seenAtLabel:`25. november 2024 kl 15.30`,isEndUser:!0}]}}},b={args:{seenByLog:u}},x={args:{seenByLog:u,badge:{label:`Uåpnet innhold`}}},S={args:{seenByLog:u,unread:!0}},C={args:{grouped:!0}},w={args:{status:{value:`requires-attention`,label:`Krever handling`}}},T={args:{...w.args,dueAt:`2025-01-01`,dueAtLabel:`Frist: 1. januar 2025`}},E={args:{status:{value:`in-progress`,label:`Under arbeid`}}},D={args:{status:{value:`completed`,label:`Avsluttet`}}},O={args:{...D.args,attachmentsCount:2}},k={args:{...O.args,attachmentsLabel:`2 vedlegg`}},A={args:{summary:void 0,recipient:void 0,draftsLabel:`Utkast`}},j={args:{...w.args,draftsLabel:`Utkast`}},M={args:{...E.args,sentCount:1}},N={args:{...D.args,receivedCount:2}},P={args:{summary:void 0,sentCount:2,receivedCount:3}},F={args:{summary:void 0,archived:!0,archivedAt:`2024-11-27`,archivedAtLabel:`Arkivert`,badge:{size:`sm`,color:`neutral`,variant:`subtle`,label:`Arkiv`}}},I={args:{summary:void 0,trashed:!0,trashedAt:`2024-11-27`,trashedAtLabel:`Papirkurv`,badge:{size:`sm`,color:`neutral`,variant:`subtle`,label:`Papirkurv`}}},L={args:{status:{value:`in-progress`,label:`Under arbeid`},sentCount:1,receivedCount:2,tooltips:{sent:`Sendte meldinger`,received:`Meldinger mottatt`,attachments:`Vedlegg`,activityLog:`Åpne aktivitetslogg`}}},R={args:{loading:!0}},z={args:{title:`Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.`}},B={args:{summary:`Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.

Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.`}},V=e=>{let[t,n]=(0,p.useState)({1:{id:`1`,title:`Item 1`,selected:!0},2:{id:`2`,title:`Item 2`,selected:!1},3:{id:`3`,title:`Item 2`,selected:!1}}),r=({id:e})=>{n(t=>({...t,[e]:{...t[e],selected:!t[e].selected}}))};return Object.values(t)?.map(t=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(a,{...e,title:t.title,selected:t.selected,controls:(0,m.jsx)(i,{onChange:()=>r(t),checked:t?.selected,"aria-label":t.id})}),(0,m.jsxs)(s,{as:`li`,children:[`selected:`,t.selected?`true`:`false`]})]},t?.id))},H=e=>h?.map(t=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(a,{...e,size:t,status:{value:`in-progress`,label:`Under arbeid`}}),(0,m.jsx)(s,{as:`li`,children:t})]},t)),U=e=>(0,m.jsx)(a,{...e,status:{value:`in-progress`,label:`Under arbeid`},ariaLabel:`Title`,as:`a`,href:`//vg.no`}),W=e=>(0,m.jsx)(a,{...e,status:{value:`in-progress`,label:`Under arbeid`},controls:(0,m.jsx)(o,{...l}),ariaLabel:`Title`,as:`a`,href:`//vg.no`}),G=e=>(0,m.jsx)(a,{...e,status:{value:`in-progress`,label:`Under arbeid`},controls:(0,m.jsx)(o,{...l}),title:`Title with highlighted text`,summary:`Summary with highlighted text`,highlightWords:[`title`,`highlight`],ariaLabel:`Title`,as:`a`,href:`//vg.no`});_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {}
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    unread: true,
    badge: {
      label: 'Ny'
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog: {
      title: 'Sett av bruker',
      items: [{
        id: '1',
        name: 'John Doe',
        seenAt: '2024-11-25 15:30',
        seenAtLabel: '25. november 2024 kl 15.30',
        isEndUser: true
      }]
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog,
    badge: {
      label: 'Uåpnet innhold'
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog,
    unread: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    grouped: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    dueAt: '2025-01-01',
    dueAtLabel: 'Frist: 1. januar 2025'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    attachmentsCount: 2
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...AttachmentsCount.args,
    attachmentsLabel: '2 vedlegg'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    recipient: undefined,
    draftsLabel: 'Utkast'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    draftsLabel: 'Utkast'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...InProgress.args,
    sentCount: 1
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    receivedCount: 2
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    sentCount: 2,
    receivedCount: 3
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert',
    badge: {
      size: 'sm',
      color: 'neutral',
      variant: 'subtle',
      label: 'Arkiv'
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Papirkurv',
    badge: {
      size: 'sm',
      color: 'neutral',
      variant: 'subtle',
      label: 'Papirkurv'
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    sentCount: 1,
    receivedCount: 2,
    tooltips: {
      sent: 'Sendte meldinger',
      received: 'Meldinger mottatt',
      attachments: 'Vedlegg',
      activityLog: 'Åpne aktivitetslogg'
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\\n\\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  const [items, setItems] = useState<Record<string, SelectableItem>>({
    '1': {
      id: '1',
      title: 'Item 1',
      selected: true
    },
    '2': {
      id: '2',
      title: 'Item 2',
      selected: false
    },
    '3': {
      id: '3',
      title: 'Item 2',
      selected: false
    }
  });
  const onSelect = ({
    id
  }: {
    id: string;
  }) => {
    setItems((prevState: Record<string, SelectableItem>) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          selected: !prevState[id].selected
        }
      };
    });
  };
  return Object.values(items)?.map(item => {
    return <Fragment key={item?.id}>
        <DialogListItem {...args} title={item.title} selected={item.selected} controls={<ItemSelect onChange={() => onSelect(item)} checked={item?.selected} aria-label={item.id} />} />
        <MetaItem as={'li'}>selected:{item.selected ? 'true' : 'false'}</MetaItem>
      </Fragment>;
  });
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return sizes?.map(size => {
    return <Fragment key={size}>
        <DialogListItem {...args} size={size} status={{
        value: 'in-progress',
        label: 'Under arbeid'
      }} />

        <MetaItem as={'li'}>{size}</MetaItem>
      </Fragment>;
  });
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} controls={<ContextMenu {...contextMenu} />} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} controls={<ContextMenu {...contextMenu} />} title="Title with highlighted text" summary="Summary with highlighted text" highlightWords={['title', 'highlight']} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...G.parameters?.docs?.source}}};var K=`Default.Unread.SeenByEndUser.SeenByMultiple.UnopenedContent.MarkedAsUnread.GroupedAvatars.RequiresAttention.DueAt.InProgress.Completed.AttachmentsCount.AttachmentsLabel.Draft.DraftAndStatus.SentCount.ReceivedCount.Transmissions.Archived.Trashed.WithTooltips.Loading.LongTitle.LongSummary.Selectable.Sizes.AsLink.CustomControls.HighlightWords`.split(`.`);export{F as Archived,U as AsLink,O as AttachmentsCount,k as AttachmentsLabel,D as Completed,W as CustomControls,_ as Default,A as Draft,j as DraftAndStatus,T as DueAt,C as GroupedAvatars,G as HighlightWords,E as InProgress,R as Loading,B as LongSummary,z as LongTitle,S as MarkedAsUnread,N as ReceivedCount,w as RequiresAttention,y as SeenByEndUser,b as SeenByMultiple,V as Selectable,M as SentCount,H as Sizes,P as Transmissions,I as Trashed,x as UnopenedContent,v as Unread,L as WithTooltips,K as __namedExportsOrder,g as default,f as t};