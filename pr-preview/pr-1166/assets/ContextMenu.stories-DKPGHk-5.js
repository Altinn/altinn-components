import{j as t}from"./iframe-0B_Yudin.js";import{S as b}from"./ArrowRedo-CG2MDWIG.js";import{S as v}from"./EyeClosed-Bp89mSRH.js";import{S as I}from"./Archive-DM72aU-A.js";import{S as k}from"./Trash-C5AYfDtF.js";import{S as w}from"./ClockDashed-Bz_gcxU0.js";import{S as l}from"./TeddyBear-Dj9NiVei.js";import{i as u}from"./inboxSearchResults-CIh7ZgKq.js";import{C as r}from"./ContextMenu-CnWikKRV.js";import{L as x}from"./List-BxubJ1l7.js";import{L as d}from"./ListItem-DnHiZFTT.js";import{D as g}from"./DialogListItem-DpL0YK1w.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BUxMg0Ir.js";import"./dialogs-CwvjWPei.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-WGcixxkG.js";import"./AttachmentList-9BpxSzZP.js";import"./AttachmentLink-bBQ4-xh9.js";import"./Icon-CbCRlB_g.js";import"./index-bzqtFzN_.js";import"./Skeleton-CCW5QxrE.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./Section-byNAOZ7t.js";import"./Flex-CcsVAtXA.js";import"./Heading-iCNnL7gN.js";import"./useHighlightedText-1P3axs8E.js";import"./TransmissionList-BqM2jJf1.js";import"./Transmission-Dt8pzG6r.js";import"./Typography-WSorE15D.js";import"./SeenByLog-DLjgGEeI.js";import"./SeenByLogButton-CW6JbDsE.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./AvatarGroup-VvayKp3V.js";import"./Avatar-BGwRUT15.js";import"./SeenByLogItem-BD6_ejfI.js";import"./Byline-C3mhaQKv.js";import"./Divider-DZtdoQqC.js";import"./DialogActions-B_VQvDt0.js";import"./ButtonGroupDivider-BIa7C9rx.js";import"./ChevronUp-CRY6Xdys.js";import"./ChevronDown-DyrNm3cx.js";import"./DropdownBase-D0bCbZS_.js";import"./useClickOutside-Br2xdjO6.js";import"./ButtonGroup-CSUZvsoD.js";import"./SearchField-aP7iZ-N9.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./XMark-4vnuAWTz.js";import"./FieldBase-BRRzaSEH.js";import"./Label-BawrqgTw.js";import"./index-DeiwrdtL.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuListHeading-BRJCvMdb.js";import"./MenuItem-ByHw8468.js";import"./ItemMedia-DPzqoyVf.js";import"./Checkmark-BmAdxrUQ.js";import"./ItemControls-DGPFdAX4.js";import"./ChevronRight-D1gjYegd.js";import"./useMenu-G8FOBFFN.js";import"./InformationSquare-C3Az81Rf.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-B1mLRZqh.js";import"./Dropdown-Ceu59hlm.js";import"./MenuElipsisHorizontal-Brw3IxFk.js";import"./ItemLink-BmeT6DsA.js";import"./DialogByline-pq2Gdiqj.js";import"./DialogMetadata-BBis2H3P.js";import"./DialogStatus-BXU-rAJH.js";import"./MetaItem-DSlZcWPy.js";import"./ProgressIcon-Tut3v7vd.js";import"./Paperclip-Dm48k2vH.js";import"./Files-BJMam6eS.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Wt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Xt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Xt as __namedExportsOrder,Wt as default};
