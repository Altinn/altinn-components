import{j as e,r as F}from"./iframe-Dip44woq.js";import{c as _}from"./contextMenu-CGPoUlcB.js";import{s as J}from"./skatt-Eb53q4vT.js";import{D as c}from"./DialogListItem-2V1e9i78.js";import{s as W}from"./seenByLog-A816RdIE.js";import{L as K}from"./List-oCmeNZU4.js";import{I as V}from"./ListItem-BNxxo84x.js";import{M as O}from"./MetaItem-BtBf6ocE.js";import{C as w}from"./ContextMenu-DjyLYrv8.js";const $=["xl","lg","md","sm","xs"],Q={title:"Inbox/DialogListItem",component:c,tags:["autodocsi","beta"],argTypes:{},args:{title:"Title",summary:"Summary",sender:J,recipient:{type:"person",name:"Recipient name"},updatedAt:"2024-11-25 15:30",updatedAtLabel:"25. november 2024 kl 15.30",status:{}},decorators:[r=>{const n={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return e.jsx("div",{style:n,children:e.jsx(K,{children:e.jsx(r,{})})})}]},d={args:{}},l={args:{unread:!0}},u={args:{seenByLog:{title:"Sett av bruker",items:[{id:"1",name:"John Doe",seenAt:"2024-11-25 15:30",seenAtLabel:"25. november 2024 kl 15.30",isEndUser:!0}]}}},m={args:{seenByLog:W}},g={args:{seenByLog:W,badge:{label:"Uåpnet innhold"}}},p={args:{seenByLog:W,unread:!0}},h={args:{grouped:!0}},t={args:{status:{value:"requires-attention",label:"Krever handling"}}},b={args:{...t.args,dueAt:"2025-01-01",dueAtLabel:"Frist: 1. januar 2025"}},o={args:{status:{value:"in-progress",label:"Under arbeid"}}},a={args:{status:{value:"completed",label:"Avsluttet"}}},i={args:{...a.args,attachmentsCount:2}},v={args:{...i.args,attachmentsLabel:"2 vedlegg"}},A={args:{summary:void 0,recipient:void 0,draftsLabel:"Utkast"}},S={args:{...t.args,draftsLabel:"Utkast"}},L={args:{...a.args,archived:!0,archivedAt:"2024-11-27",archivedAtLabel:"Arkivert"}},f={args:{...a.args,archived:!0,archivedAt:"2024-11-27",archivedAtLabel:"Arkivert av deg"}},C={args:{...a.args,archived:!0,archivedAt:"2024-11-27",archivedAtLabel:"Arkivert 27.11.2024"}},y={args:{...t.args,trashed:!0,trashedAt:"2024-11-27",trashedAtLabel:"Papirkurv"}},I={args:{...t.args,trashed:!0,trashedAt:"2024-11-27",trashedAtLabel:"Slettet 27.11.2024"}},x={args:{...t.args,trashed:!0,trashedAt:"2024-11-27",trashedAtLabel:"Slettet av deg"}},k={args:{...o.args,sentCount:1}},U={args:{...a.args,receivedCount:2}},M={args:{summary:void 0,sentCount:2,receivedCount:3}},D={args:{status:{value:"in-progress",label:"Under arbeid"},sentCount:1,receivedCount:2,tooltips:{sent:"Sendte meldinger",received:"Meldinger mottatt",attachments:"Vedlegg",activityLog:"Åpne aktivitetslogg"}}},T={args:{loading:!0}},j={args:{title:"Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."}},B={args:{summary:`Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.

Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.`}},R=r=>{const[n,G]=F.useState({1:{id:"1",title:"Item 1",selected:!0},2:{id:"2",title:"Item 2",selected:!1},3:{id:"3",title:"Item 2",selected:!1}}),H=({id:s})=>{G(z=>({...z,[s]:{...z[s],selected:!z[s].selected}}))};return Object.values(n)?.map(s=>e.jsxs(F.Fragment,{children:[e.jsx(c,{...r,title:s.title,selected:s.selected,controls:e.jsx(V,{onChange:()=>H(s),checked:s?.selected,"aria-label":s.id})}),e.jsxs(O,{as:"li",children:["selected:",s.selected?"true":"false"]})]},s?.id))},P=r=>$?.map(n=>e.jsxs(F.Fragment,{children:[e.jsx(c,{...r,size:n,status:{value:"in-progress",label:"Under arbeid"}}),e.jsx(O,{as:"li",children:n})]},n)),q=r=>e.jsx(c,{...r,status:{value:"in-progress",label:"Under arbeid"},ariaLabel:"Title",as:"a",href:"//vg.no"}),N=r=>e.jsx(c,{...r,status:{value:"in-progress",label:"Under arbeid"},controls:e.jsx(w,{..._}),ariaLabel:"Title",as:"a",href:"//vg.no"}),E=r=>e.jsx(c,{...r,status:{value:"in-progress",label:"Under arbeid"},controls:e.jsx(w,{..._}),title:"Title with highlighted text",summary:"Summary with highlighted text",highlightWords:["title","highlight"],ariaLabel:"Title",as:"a",href:"//vg.no"});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    unread: true
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    grouped: true
  }
}`,...h.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    }
  }
}`,...t.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    dueAt: '2025-01-01',
    dueAtLabel: 'Frist: 1. januar 2025'
  }
}`,...b.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    attachmentsCount: 2
  }
}`,...i.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...AttachmentsCount.args,
    attachmentsLabel: '2 vedlegg'
  }
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    recipient: undefined,
    draftsLabel: 'Utkast'
  }
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    draftsLabel: 'Utkast'
  }
}`,...S.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert'
  }
}`,...L.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert av deg'
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert 27.11.2024'
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Papirkurv'
  }
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Slettet 27.11.2024'
  }
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Slettet av deg'
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...InProgress.args,
    sentCount: 1
  }
}`,...k.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    receivedCount: 2
  }
}`,...U.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    sentCount: 2,
    receivedCount: 3
  }
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\\n\\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
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
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return sizes?.map(size => {
    return <Fragment key={size}>
        <DialogListItem {...args} size={size} status={{
        value: 'in-progress',
        label: 'Under arbeid'
      }} />

        <MetaItem as={'li'}>{size}</MetaItem>
      </Fragment>;
  });
}`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...q.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} controls={<ContextMenu {...contextMenu} />} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} controls={<ContextMenu {...contextMenu} />} title="Title with highlighted text" summary="Summary with highlighted text" highlightWords={['title', 'highlight']} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...E.parameters?.docs?.source}}};const X=["Default","Unread","SeenByEndUser","SeenByMultiple","UnopenedContent","MarkedAsUnread","GroupedAvatars","RequiresAttention","DueAt","InProgress","Completed","AttachmentsCount","AttachmentsLabel","Draft","DraftAndStatus","Archived","ArchivedBy","ArchivedAt","Trashed","TrashedAt","TrashedBy","SentCount","ReceivedCount","Transmissions","WithTooltips","Loading","LongTitle","LongSummary","Selectable","Sizes","AsLink","CustomControls","HighlightWords"],ie=Object.freeze(Object.defineProperty({__proto__:null,Archived:L,ArchivedAt:C,ArchivedBy:f,AsLink:q,AttachmentsCount:i,AttachmentsLabel:v,Completed:a,CustomControls:N,Default:d,Draft:A,DraftAndStatus:S,DueAt:b,GroupedAvatars:h,HighlightWords:E,InProgress:o,Loading:T,LongSummary:B,LongTitle:j,MarkedAsUnread:p,ReceivedCount:U,RequiresAttention:t,SeenByEndUser:u,SeenByMultiple:m,Selectable:R,SentCount:k,Sizes:P,Transmissions:M,Trashed:y,TrashedAt:I,TrashedBy:x,UnopenedContent:g,Unread:l,WithTooltips:D,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{L as A,a as C,ie as D,h as G,o as I,p as M,t as R,u as S,M as T,l as U,d as a,g as b,m as c,A as d,S as e,k as f,U as g,y as h};
