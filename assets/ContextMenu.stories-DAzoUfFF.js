import{p as t}from"./iframe-D7BK96qe.js";import{S as b}from"./ArrowRedo-DisQ4ztO.js";import{S as v}from"./EyeClosed-Fxax43QS.js";import{S as I}from"./Archive-CZ8Zskdn.js";import{S as k}from"./Trash-CmRN9Bc1.js";import{S as w}from"./ClockDashed-BbDHzBaM.js";import{C as r}from"./ContextMenu-CkW9u7kb.js";import{i as l}from"./inboxSearchResults-DMMwNAh7.js";import{S as u}from"./TeddyBear-PP7CKWSw.js";import{L as x}from"./List-D3gzZVMY.js";import{D as d}from"./DialogListItem-9wTbgVHa.js";import{L as g}from"./ListItem-BwjNTMuN.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B1IjdNvC.js";import"./useDropdownMenuController-D8oAtfoQ.js";import"./Dropdown-CHIS9Scb.js";import"./index-CL9j6gFH.js";import"./Button-UbmuloFB.js";import"./tooltip-B8elfXS-.js";import"./XMark-DKvmykI8.js";import"./SearchField-D67W67ub.js";import"./MagnifyingGlass-B3Q8Qlgl.js";import"./FieldBase-DmZ-AQhF.js";import"./Typography-CoOY9SxO.js";import"./useHighlightedText-C3262gRX.js";import"./Skeleton-C-TQnNEe.js";import"./Label-DW0yr3EV.js";import"./Input-wwG44gvy.js";import"./useMenu-CRon1bQ1.js";import"./MenuListItem-CLhEP-2O.js";import"./MenuListHeading-U2jvLcu6.js";import"./MenuItem-BkvPF8Fg.js";import"./ItemMedia-BmnjDO8T.js";import"./Avatar-BzaJ_tLr.js";import"./AvatarGroup-BXGOcJTt.js";import"./Icon-CXOWvudR.js";import"./Checkmark-BPQmQq7A.js";import"./ItemLabel-CTolDWEe.js";import"./Heading-Q-ep_pj6.js";import"./ItemControls-BZAZaWU9.js";import"./Badge-CP0to2q5.js";import"./Tooltip-BXZ0f-e8.js";import"./ChevronRight-B2Fr_XJI.js";import"./index-P9j8YxHr.js";import"./InformationSquare-BFNj1lbk.js";import"./MenuElipsisHorizontal-Cv2I31dy.js";import"./dialogs-Dd_bl3Kf.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-2JGkCqrD.js";import"./AttachmentList-BUtx4gr-.js";import"./AttachmentLink-Cf9u9n4e.js";import"./File-BKQJfDE6.js";import"./Section-G7MRDbZ9.js";import"./Flex-DKrdkBVD.js";import"./TransmissionList-tT0hfPjC.js";import"./Transmission-Bz0nQXAT.js";import"./SeenByLog-R4J6Zkt3.js";import"./SeenByLogButton-CAjkFzU6.js";import"./SeenByLogItem-E8EAjr1D.js";import"./Byline-Q4XhunLC.js";import"./Divider-DoxmSZvL.js";import"./DialogActions-q3fHtZVR.js";import"./ButtonGroupDivider-CgeFqPtI.js";import"./ChevronUp-CmwigBl7.js";import"./ChevronDown-RBr9MJP5.js";import"./DropdownBase-D56W0kpP.js";import"./useClickOutside-BfBoOekC.js";import"./ButtonGroup-DiPjg2lm.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BknciWr5.js";import"./ItemLink-BHcTvWw3.js";import"./DialogByline-CK_3yBL2.js";import"./DialogMetadata-DTtKdTXR.js";import"./DialogStatus-BcS25ybh.js";import"./MetaItem-BTeQwudu.js";import"./ProgressIcon-B2VmjhC7.js";import"./Paperclip-BZfveaC4.js";import"./Files-xG74C-7o.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
