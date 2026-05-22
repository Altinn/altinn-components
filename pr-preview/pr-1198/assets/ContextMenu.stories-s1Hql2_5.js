import{j as t}from"./iframe-DXwGEFZf.js";import{S as b}from"./ArrowRedo-DcFH0AvK.js";import{S as v}from"./EyeClosed-COXp-eg4.js";import{S as I}from"./Archive-BSZ1HBnn.js";import{S as k}from"./Trash-Bhi8vMFl.js";import{S as w}from"./ClockDashed-DPDdHUks.js";import{S as l}from"./TeddyBear-C6xbGXLZ.js";import{i as u}from"./inboxSearchResults-BHPvDnm_.js";import{C as r}from"./ContextMenu-9EBdvE_8.js";import{L as x}from"./List-BgXw8LTl.js";import{L as d}from"./ListItem-C3blsWJZ.js";import{D as g}from"./DialogListItem-UldOvBG-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Df52yuGg.js";import"./dialogs-CRBTUMNY.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-s_Ru8xNx.js";import"./AttachmentList-DtGXh9Zx.js";import"./AttachmentLink-GOSA-QOX.js";import"./Icon-DEVqj2eM.js";import"./index-DpQTH4Pc.js";import"./Skeleton-CD7VUCi3.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./tooltip-OQNLf2nv.js";import"./Section-BSKZ_Frt.js";import"./Flex-U6liI5ZR.js";import"./Heading-D1SypAUR.js";import"./useHighlightedText-NV3gg9HW.js";import"./TransmissionList-DFwkHzsV.js";import"./Transmission-BgK7kmpB.js";import"./Typography-CegVoZkA.js";import"./SeenByLog-J0soz1dI.js";import"./SeenByLogButton-kAEXIWqd.js";import"./Button-BcOfKjgE.js";import"./AvatarGroup-vB7eodsE.js";import"./Avatar-OxvpOCq4.js";import"./SeenByLogItem-BU3eGMef.js";import"./Byline-DdT-FOev.js";import"./Divider-C7X97dOt.js";import"./DialogActions-CxxvCibc.js";import"./ButtonGroupDivider-Cg8WMtdf.js";import"./ChevronUp-CJwhEbs5.js";import"./ChevronDown-Cc2tQRQQ.js";import"./DropdownBase-DBZo2fJo.js";import"./useClickOutside-DKhS5fbt.js";import"./ButtonGroup-BgmjkJuw.js";import"./SearchField-BCjbtpiQ.js";import"./MagnifyingGlass-CllD3bzP.js";import"./XMark-BspkucHC.js";import"./FieldBase-BwCMZAv_.js";import"./Label-ChoE5xRO.js";import"./Input-CjRvyA41.js";import"./MenuListItem-BMkFPPC3.js";import"./MenuListHeading-G6YR-18r.js";import"./MenuItem-COBQQf6N.js";import"./ItemMedia-C0bSIjdI.js";import"./Checkmark-DpC6lRZL.js";import"./ItemControls-DXxKFox6.js";import"./ChevronRight-B7NrC3Rp.js";import"./useMenu-DnVZQPIX.js";import"./index-BmZUBcCg.js";import"./InformationSquare-CathhXXw.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-3S7tUMR-.js";import"./Dropdown-BZOF64eO.js";import"./MenuElipsisHorizontal-lS07k2bO.js";import"./ItemLink-BttCTuhw.js";import"./DialogByline-Drzs4Cq9.js";import"./DialogMetadata-DLx9xVHq.js";import"./DialogStatus-CV5CC-wm.js";import"./MetaItem-DceFaU_B.js";import"./ProgressIcon-BlpRhlDQ.js";import"./Paperclip-DhRJlu28.js";import"./Files-D4yny0rj.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Nt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Nt as __namedExportsOrder,Jt as default};
