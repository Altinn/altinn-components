import{j as e,r as R}from"./iframe-BaUVsogD.js";import{c as E}from"./contextMenu-BPDFhDgW.js";import{s as O}from"./skatt-Eb53q4vT.js";import{D as l}from"./DialogListItem-CLsgXq7I.js";import{s as B}from"./seenByLog-A816RdIE.js";import{L as w}from"./List-SYbm324s.js";import{I as G}from"./ListItem-C1RL14_r.js";import{M as q}from"./MetaItem-BaxMAcwH.js";import{C as F}from"./ContextMenu-Ckw6t3Jk.js";const H=["xl","lg","md","sm","xs"],J={title:"Inbox/DialogListItem",component:l,tags:["autodocsi","beta"],argTypes:{},args:{title:"Title",summary:"Summary",sender:O,recipient:{type:"person",name:"Recipient name"},updatedAt:"2024-11-25 15:30",updatedAtLabel:"25. november 2024 kl 15.30",status:{}},decorators:[r=>{const a={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return e.jsx("div",{style:a,children:e.jsx(w,{children:e.jsx(r,{})})})}]},c={args:{}},u={args:{unread:!0,badge:{label:"Ny"}}},d={args:{seenByLog:{title:"Sett av bruker",items:[{id:"1",name:"John Doe",seenAt:"2024-11-25 15:30",seenAtLabel:"25. november 2024 kl 15.30",isEndUser:!0}]}}},m={args:{seenByLog:B}},g={args:{seenByLog:B,badge:{label:"Uåpnet innhold"}}},p={args:{seenByLog:B,unread:!0}},b={args:{grouped:!0}},t={args:{status:{value:"requires-attention",label:"Krever handling"}}},h={args:{...t.args,dueAt:"2025-01-01",dueAtLabel:"Frist: 1. januar 2025"}},o={args:{status:{value:"in-progress",label:"Under arbeid"}}},n={args:{status:{value:"completed",label:"Avsluttet"}}},i={args:{...n.args,attachmentsCount:2}},v={args:{...i.args,attachmentsLabel:"2 vedlegg"}},S={args:{summary:void 0,recipient:void 0,draftsLabel:"Utkast"}},L={args:{...t.args,draftsLabel:"Utkast"}},f={args:{...o.args,sentCount:1}},A={args:{...n.args,receivedCount:2}},C={args:{summary:void 0,sentCount:2,receivedCount:3}},y={args:{summary:void 0,archived:!0,archivedAt:"2024-11-27",archivedAtLabel:"Arkivert",badge:{size:"sm",color:"neutral",variant:"subtle",label:"Arkiv"}}},I={args:{summary:void 0,trashed:!0,trashedAt:"2024-11-27",trashedAtLabel:"Papirkurv",badge:{size:"sm",color:"neutral",variant:"subtle",label:"Papirkurv"}}},x={args:{status:{value:"in-progress",label:"Under arbeid"},sentCount:1,receivedCount:2,tooltips:{sent:"Sendte meldinger",received:"Meldinger mottatt",attachments:"Vedlegg",activityLog:"Åpne aktivitetslogg"}}},k={args:{loading:!0}},U={args:{title:"Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."}},M={args:{summary:`Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.

Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.`}},D=r=>{const[a,W]=R.useState({1:{id:"1",title:"Item 1",selected:!0},2:{id:"2",title:"Item 2",selected:!1},3:{id:"3",title:"Item 2",selected:!1}}),_=({id:s})=>{W(N=>({...N,[s]:{...N[s],selected:!N[s].selected}}))};return Object.values(a)?.map(s=>e.jsxs(R.Fragment,{children:[e.jsx(l,{...r,title:s.title,selected:s.selected,controls:e.jsx(G,{onChange:()=>_(s),checked:s?.selected,"aria-label":s.id})}),e.jsxs(q,{as:"li",children:["selected:",s.selected?"true":"false"]})]},s?.id))},j=r=>H?.map(a=>e.jsxs(R.Fragment,{children:[e.jsx(l,{...r,size:a,status:{value:"in-progress",label:"Under arbeid"}}),e.jsx(q,{as:"li",children:a})]},a)),T=r=>e.jsx(l,{...r,status:{value:"in-progress",label:"Under arbeid"},ariaLabel:"Title",as:"a",href:"//vg.no"}),P=r=>e.jsx(l,{...r,status:{value:"in-progress",label:"Under arbeid"},controls:e.jsx(F,{...E}),ariaLabel:"Title",as:"a",href:"//vg.no"}),z=r=>e.jsx(l,{...r,status:{value:"in-progress",label:"Under arbeid"},controls:e.jsx(F,{...E}),title:"Title with highlighted text",summary:"Summary with highlighted text",highlightWords:["title","highlight"],ariaLabel:"Title",as:"a",href:"//vg.no"});c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    unread: true,
    badge: {
      label: 'Ny'
    }
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog,
    badge: {
      label: 'Uåpnet innhold'
    }
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog,
    unread: true
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    grouped: true
  }
}`,...b.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    }
  }
}`,...t.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    dueAt: '2025-01-01',
    dueAtLabel: 'Frist: 1. januar 2025'
  }
}`,...h.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    attachmentsCount: 2
  }
}`,...i.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...AttachmentsCount.args,
    attachmentsLabel: '2 vedlegg'
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    recipient: undefined,
    draftsLabel: 'Utkast'
  }
}`,...S.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    draftsLabel: 'Utkast'
  }
}`,...L.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...InProgress.args,
    sentCount: 1
  }
}`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    receivedCount: 2
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    sentCount: 2,
    receivedCount: 3
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...k.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
}`,...U.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\\n\\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
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
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return sizes?.map(size => {
    return <Fragment key={size}>
        <DialogListItem {...args} size={size} status={{
        value: 'in-progress',
        label: 'Under arbeid'
      }} />

        <MetaItem as={'li'}>{size}</MetaItem>
      </Fragment>;
  });
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} controls={<ContextMenu {...contextMenu} />} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} controls={<ContextMenu {...contextMenu} />} title="Title with highlighted text" summary="Summary with highlighted text" highlightWords={['title', 'highlight']} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...z.parameters?.docs?.source}}};const K=["Default","Unread","SeenByEndUser","SeenByMultiple","UnopenedContent","MarkedAsUnread","GroupedAvatars","RequiresAttention","DueAt","InProgress","Completed","AttachmentsCount","AttachmentsLabel","Draft","DraftAndStatus","SentCount","ReceivedCount","Transmissions","Archived","Trashed","WithTooltips","Loading","LongTitle","LongSummary","Selectable","Sizes","AsLink","CustomControls","HighlightWords"],ae=Object.freeze(Object.defineProperty({__proto__:null,Archived:y,AsLink:T,AttachmentsCount:i,AttachmentsLabel:v,Completed:n,CustomControls:P,Default:c,Draft:S,DraftAndStatus:L,DueAt:h,GroupedAvatars:b,HighlightWords:z,InProgress:o,Loading:k,LongSummary:M,LongTitle:U,MarkedAsUnread:p,ReceivedCount:A,RequiresAttention:t,SeenByEndUser:d,SeenByMultiple:m,Selectable:D,SentCount:f,Sizes:j,Transmissions:C,Trashed:I,UnopenedContent:g,Unread:u,WithTooltips:x,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{y as A,n as C,ae as D,b as G,o as I,p as M,t as R,d as S,C as T,u as U,c as a,g as b,m as c,S as d,L as e,f,A as g,I as h};
