import{j as t}from"./iframe-CHILL5tZ.js";import{S as b}from"./ArrowRedo-Cx80lBeW.js";import{S as v}from"./EyeClosed-C7Z8M6lM.js";import{S as I}from"./Archive-D1KH-vpC.js";import{S as k}from"./Trash-DeMvNL0c.js";import{S as w}from"./ClockDashed-DiSE3K5K.js";import{S as l}from"./TeddyBear-DA3GBvZE.js";import{i as u}from"./inboxSearchResults-CbQKOIHL.js";import{C as r}from"./ContextMenu-CxnnjBKA.js";import{L as x}from"./List-BcksO0y4.js";import{L as d}from"./ListItem-foRln84O.js";import{D as g}from"./DialogListItem-BCvU23Jy.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CxjMVxT3.js";import"./dialogs-D86PrNOn.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Cco0dYcC.js";import"./AttachmentList-DZQFNC6U.js";import"./AttachmentLink-CbecvhZJ.js";import"./Icon-DK0uLDnk.js";import"./index-D0JdUEkn.js";import"./Skeleton-BX9QnUCy.js";import"./Badge-DHaboY8X.js";import"./Tooltip-gqkYQCXG.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BXZnV1dm.js";import"./lite-DaUVFjkg.js";import"./Section-DgehUQNo.js";import"./Flex-A7S1F2F0.js";import"./Heading-B80Wap_u.js";import"./useHighlightedText-sycLCu80.js";import"./TransmissionList-DQdghVzt.js";import"./Transmission-C2oV6ZPR.js";import"./Typography-BDbDV84g.js";import"./SeenByLog-cmrnNnB2.js";import"./SeenByLogButton-CsHGlnVt.js";import"./Button-BhP7fHb4.js";import"./button-BIgBCVIC.js";import"./AvatarGroup-9Hd8MZfa.js";import"./Avatar-BEHn6hs3.js";import"./SeenByLogItem-CJHOC546.js";import"./Byline-Dcj1C1qm.js";import"./Divider-BUzBNLe4.js";import"./DialogActions-CtXgovcE.js";import"./ButtonGroupDivider-BzY6J6Jz.js";import"./ChevronUp-DXNAPjGw.js";import"./ChevronDown-D4I_nLcA.js";import"./DropdownBase-CYpD6lS6.js";import"./useClickOutside-B1Dv7Ea8.js";import"./ButtonGroup-85VHWPxh.js";import"./SearchField-DpxDm5xW.js";import"./MagnifyingGlass-Z3jVe5X3.js";import"./XMark-DQxCv5Yn.js";import"./FieldBase-DGrlYpX7.js";import"./Label-BmNpXiOX.js";import"./index-ASxRsC3U.js";import"./Input-F-jc7mgY.js";import"./input-BiYbaGgt.js";import"./MenuListItem-D8HsXFkE.js";import"./MenuListHeading-D8Av5awU.js";import"./MenuItem-DaU4SSfC.js";import"./ItemMedia-BDXURQdO.js";import"./Checkmark-nA2yaQnq.js";import"./ItemControls-Okligr0R.js";import"./ChevronRight-C2HiJ5JV.js";import"./useMenu-CBS-gOUF.js";import"./InformationSquare-qW6C7jKR.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BYzUrJMj.js";import"./Dropdown-riFJwjzV.js";import"./MenuElipsisHorizontal-wDeQJ2Yp.js";import"./ItemLink-SjZ2P_5W.js";import"./DialogByline-DDHCZcRo.js";import"./DialogMetadata-BIOVqP1w.js";import"./DialogStatus-ollvnJ-5.js";import"./MetaItem-nJDOdEHI.js";import"./ProgressIcon-ClnA-rQc.js";import"./Paperclip-gwDySizp.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
