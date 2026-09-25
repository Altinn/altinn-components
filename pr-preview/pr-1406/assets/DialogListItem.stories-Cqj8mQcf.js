import{a7 as e,aa as O}from"./iframe-vkxhbe5D.js";import{s as $}from"./skatt-Eb53q4vT.js";import{c as G}from"./contextMenu-DEzqJcTK.js";import{M as H}from"./MetaItem-Bqu0jDo4.js";import{L as Q}from"./List-BJAmkQFZ.js";import{s as w}from"./seenByLog-A816RdIE.js";import{D as c}from"./DialogListItem-Df1Eb0EI.js";import{C as J}from"./ContextMenu-BO0qnyJi.js";import{I as X}from"./ListItem-CZ_cmVNu.js";const Y=["xl","lg","md","sm","xs"],Z={title:"Inbox/DialogListItem",component:c,tags:["autodocsi","beta"],argTypes:{},args:{title:"Title",summary:"Summary",sender:$,recipient:{type:"person",name:"Recipient name"},updatedAt:"2024-11-25 15:30",updatedAtLabel:"25. november 2024 kl. 15.30",tooltips:{updatedAt:"Sist oppdatert"},status:{}},decorators:[r=>{const n={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return e.jsx("div",{style:n,children:e.jsx(Q,{children:e.jsx(r,{})})})}]},d={args:{}},l={args:{unread:!0}},u={args:{trashedAt:"2024-11-27",trashedAtLabel:"Slettet",unread:!0}},m={args:{unreadItems:!0}},g={args:{archivedAt:"2024-11-27",archivedAtLabel:"Arkivert",unreadItems:!0}},p={args:{seenByLog:{title:"Sett av bruker",items:[{id:"1",name:"John Doe",seenAt:"2024-11-25 15:30",seenAtLabel:"25. november 2024 kl 15.30",isEndUser:!0}]}}},h={args:{seenByLog:w}},v={args:{seenByLog:w,badge:{label:"Uåpnet innhold"}}},b={args:{seenByLog:w,unread:!0}},A={args:{grouped:!0}},s={args:{status:{value:"requires-attention",label:"Krever handling"}}},S={args:{...s.args,dueAt:{datetime:"2025-01-01",label:"Frist: 1. januar 2025"}}},o={args:{status:{value:"in-progress",label:"Under arbeid"}}},a={args:{status:{value:"completed",label:"Avsluttet"}}},i={args:{...a.args,attachmentsCount:2}},L={args:{...i.args,attachmentsLabel:"2 vedlegg"}},f={args:{summary:void 0,recipient:void 0,draftsLabel:"Utkast"}},C={args:{...s.args,draftsLabel:"Utkast"}},I={args:{...a.args,archived:!0,archivedAt:"2024-11-27",archivedAtLabel:"Arkivert"}},y={args:{...a.args,archived:!0,archivedAt:"2024-11-27",archivedAtLabel:"Arkivert av deg"}},U={args:{...a.args,archived:!0,archivedAt:"2024-11-27",archivedAtLabel:"Arkivert 27.11.2024"}},x={args:{...s.args,trashed:!0,trashedAt:"2024-11-27",trashedAtLabel:"Papirkurv"}},k={args:{...s.args,trashed:!0,trashedAt:"2024-11-27",trashedAtLabel:"Slettet 27.11.2024"}},M={args:{...s.args,trashed:!0,trashedAt:"2024-11-27",trashedAtLabel:"Slettet av deg"}},T={args:{...o.args,sentCount:1}},D={args:{...a.args,receivedCount:2}},j={args:{summary:void 0,sentCount:2,receivedCount:3}},B={args:{status:{value:"in-progress",label:"Under arbeid"},sentCount:1,receivedCount:2,tooltips:{updatedAt:"Sist oppdatert",sent:"Sendte meldinger",received:"Meldinger mottatt",attachments:"Vedlegg",activityLog:"Åpne aktivitetslogg"}}},R={args:{loading:!0}},P={args:{title:"Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit."}},q={args:{summary:`Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.

Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.`}},N=r=>{const[n,K]=O.useState({1:{id:"1",title:"Item 1",selected:!0},2:{id:"2",title:"Item 2",selected:!1},3:{id:"3",title:"Item 2",selected:!1}}),V=({id:t})=>{K(_=>({..._,[t]:{..._[t],selected:!_[t].selected}}))};return Object.values(n)?.map(t=>e.jsxs(O.Fragment,{children:[e.jsx(c,{...r,title:t.title,selected:t.selected,controls:e.jsx(X,{onChange:()=>V(t),checked:t?.selected,"aria-label":t.id})}),e.jsxs(H,{as:"li",children:["selected:",t.selected?"true":"false"]})]},t?.id))},E=r=>Y?.map(n=>e.jsxs(O.Fragment,{children:[e.jsx(c,{...r,size:n,status:{value:"in-progress",label:"Under arbeid"}}),e.jsx(H,{as:"li",children:n})]},n)),z=r=>e.jsx(c,{...r,status:{value:"in-progress",label:"Under arbeid"},ariaLabel:"Title",as:"a",href:"//vg.no"}),F=r=>e.jsx(c,{...r,status:{value:"in-progress",label:"Under arbeid"},controls:e.jsx(J,{...G}),ariaLabel:"Title",as:"a",href:"//vg.no"}),W=r=>e.jsx(c,{...r,status:{value:"in-progress",label:"Under arbeid"},controls:e.jsx(J,{...G}),title:"Title with highlighted text",summary:"Summary with highlighted text",highlightWords:["title","highlight"],ariaLabel:"Title",as:"a",href:"//vg.no"});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    unread: true
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Slettet',
    unread: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    unreadItems: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert',
    unreadItems: true
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog,
    badge: {
      label: 'Uåpnet innhold'
    }
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    seenByLog,
    unread: true
  }
}`,...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    grouped: true
  }
}`,...A.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    }
  }
}`,...s.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    dueAt: {
      datetime: '2025-01-01',
      label: 'Frist: 1. januar 2025'
    }
  }
}`,...S.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...AttachmentsCount.args,
    attachmentsLabel: '2 vedlegg'
  }
}`,...L.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    recipient: undefined,
    draftsLabel: 'Utkast'
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    draftsLabel: 'Utkast'
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert'
  }
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert av deg'
  }
}`,...y.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    archived: true,
    archivedAt: '2024-11-27',
    archivedAtLabel: 'Arkivert 27.11.2024'
  }
}`,...U.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Papirkurv'
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Slettet 27.11.2024'
  }
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...RequiresAttention.args,
    trashed: true,
    trashedAt: '2024-11-27',
    trashedAtLabel: 'Slettet av deg'
  }
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...InProgress.args,
    sentCount: 1
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Completed.args,
    receivedCount: 2
  }
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined,
    sentCount: 2,
    receivedCount: 3
  }
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    sentCount: 1,
    receivedCount: 2,
    tooltips: {
      updatedAt: 'Sist oppdatert',
      sent: 'Sendte meldinger',
      received: 'Meldinger mottatt',
      attachments: 'Vedlegg',
      activityLog: 'Åpne aktivitetslogg'
    }
  }
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
}`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    summary: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\\n\\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
}`,...q.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
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
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return sizes?.map(size => {
    return <Fragment key={size}>
        <DialogListItem {...args} size={size} status={{
        value: 'in-progress',
        label: 'Under arbeid'
      }} />

        <MetaItem as={'li'}>{size}</MetaItem>
      </Fragment>;
  });
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} controls={<ContextMenu {...contextMenu} />} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...F.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`(args: DialogListItemProps) => {
  return <DialogListItem {...args} status={{
    value: 'in-progress',
    label: 'Under arbeid'
  }} controls={<ContextMenu {...contextMenu} />} title="Title with highlighted text" summary="Summary with highlighted text" highlightWords={['title', 'highlight']} ariaLabel="Title" as="a" href="//vg.no" />;
}`,...W.parameters?.docs?.source}}};const ee=["Default","Unread","UnreadTrashed","UnreadItems","UnreadItemsArchived","SeenByEndUser","SeenByMultiple","UnopenedContent","MarkedAsUnread","GroupedAvatars","RequiresAttention","DueAt","InProgress","Completed","AttachmentsCount","AttachmentsLabel","Draft","DraftAndStatus","Archived","ArchivedBy","ArchivedAt","Trashed","TrashedAt","TrashedBy","SentCount","ReceivedCount","Transmissions","WithTooltips","Loading","LongTitle","LongSummary","Selectable","Sizes","AsLink","CustomControls","HighlightWords"],le=Object.freeze(Object.defineProperty({__proto__:null,Archived:I,ArchivedAt:U,ArchivedBy:y,AsLink:z,AttachmentsCount:i,AttachmentsLabel:L,Completed:a,CustomControls:F,Default:d,Draft:f,DraftAndStatus:C,DueAt:S,GroupedAvatars:A,HighlightWords:W,InProgress:o,Loading:R,LongSummary:q,LongTitle:P,MarkedAsUnread:b,ReceivedCount:D,RequiresAttention:s,SeenByEndUser:p,SeenByMultiple:h,Selectable:N,SentCount:T,Sizes:E,Transmissions:j,Trashed:x,TrashedAt:k,TrashedBy:M,UnopenedContent:v,Unread:l,UnreadItems:m,UnreadItemsArchived:g,UnreadTrashed:u,WithTooltips:B,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{I as A,a as C,d as D,A as G,o as I,b as M,D as R,p as S,j as T,v as U,le as a,f as b,C as c,s as d,h as e,T as f,x as g,l as h};
