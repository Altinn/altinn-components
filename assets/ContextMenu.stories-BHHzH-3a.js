import{p as t}from"./iframe-BBbEwSaq.js";import{S as b}from"./ArrowRedo-BRpncLYV.js";import{S as v}from"./EyeClosed-CqlZ8cC0.js";import{S as I}from"./Archive-D8Y6xMn8.js";import{S as k}from"./Trash-Cq0lfucZ.js";import{S as w}from"./ClockDashed-BmClXrVK.js";import{C as r}from"./ContextMenu-j2psK2Du.js";import{i as l}from"./inboxSearchResults-BcY3p3n3.js";import{S as u}from"./TeddyBear-CTmxAtE-.js";import{L as x}from"./List-CzewomMq.js";import{D as d}from"./DialogListItem-DqsYURSX.js";import{L as g}from"./ListItem-CNcOgYac.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DZp72-eX.js";import"./useDropdownMenuController-e_G_Gi4i.js";import"./Dropdown-CQPIYrWf.js";import"./index-awH0sXcw.js";import"./Button-DpW4Pu6O.js";import"./tooltip-D3G3Ewte.js";import"./XMark-Dw8JSfSd.js";import"./SearchField-D1R32ak6.js";import"./MagnifyingGlass-B6FIAadU.js";import"./FieldBase-CbyxT5SM.js";import"./Typography-41mT2wo8.js";import"./useHighlightedText-DORd4ETJ.js";import"./Skeleton-DFF9p8Mx.js";import"./Label-DdMEJ83A.js";import"./Input-lqau07kD.js";import"./useMenu-CP6B3JUk.js";import"./MenuListItem-UbII8Q2r.js";import"./MenuListHeading-C7xt4T8q.js";import"./MenuItem-CL2l3rp8.js";import"./ItemMedia-DR-yuWlq.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Icon-Cx6QAjG2.js";import"./Checkmark-BcTHEh83.js";import"./ItemLabel-B9gTJ9up.js";import"./Heading-DDkqEyV3.js";import"./ItemControls-DaNsbzwN.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./ChevronRight-Bj8DUJ8P.js";import"./index-BBId2cwS.js";import"./InformationSquare-BNlJiT0G.js";import"./MenuElipsisHorizontal-WptlvvL2.js";import"./dialogs-BT_qxBSB.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DgB74Beo.js";import"./AttachmentList-DLxmq2jR.js";import"./AttachmentLink-BdZT0U_E.js";import"./File-Bh6eAgDO.js";import"./Section-Dq0xs0Y_.js";import"./Flex-Cc0Ueohf.js";import"./TransmissionList-BSr6t2Zb.js";import"./Transmission-DM_TE1C_.js";import"./SeenByLog-CX7Vs0gn.js";import"./SeenByLogButton-DWVtRTg2.js";import"./SeenByLogItem-D01gFTCI.js";import"./Byline-DkV2O3WM.js";import"./Divider-B4CG97r2.js";import"./DialogActions-CkznsfDG.js";import"./ButtonGroupDivider-DFu7SRn8.js";import"./ChevronUp-BD5jqYZu.js";import"./ChevronDown-B-mDhRFL.js";import"./DropdownBase-CaMe5Ty6.js";import"./useClickOutside-BpoaWvb4.js";import"./ButtonGroup-oq7iIeFJ.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Fqig4UIJ.js";import"./ItemLink-CUO1wpZw.js";import"./DialogByline-D5Sp-PNe.js";import"./DialogMetadata-Y_71nl--.js";import"./DialogStatus-C21RHXRu.js";import"./MetaItem-CyYLf1Im.js";import"./ProgressIcon-CRVFhTqS.js";import"./Paperclip-CTYUfIdt.js";import"./Files-bNJLiVMz.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Wt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Wt as __namedExportsOrder,Vt as default};
