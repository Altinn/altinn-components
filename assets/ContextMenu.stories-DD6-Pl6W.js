import{j as t}from"./iframe-C32LkOFR.js";import{S as b}from"./ArrowRedo-Bsbm67fW.js";import{S as v}from"./EyeClosed-CJ445f3o.js";import{S as I}from"./Archive-DlpjqB3V.js";import{S as k}from"./Trash-C9CuwFFb.js";import{S as w}from"./ClockDashed-BYpO9OrU.js";import{S as l}from"./TeddyBear-BHtRsNtG.js";import{i as u}from"./inboxSearchResults-BwR0DnhL.js";import{C as r}from"./ContextMenu-afhlnX7Z.js";import{L as x}from"./List-Bfu0C2So.js";import{L as d}from"./ListItem-MdjrCvXj.js";import{D as g}from"./DialogListItem-DVcAXIiR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C6VS968l.js";import"./dialogs-CO3N4hr1.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Xi6Fi8ef.js";import"./AttachmentList-Dc0Zh5-5.js";import"./AttachmentLink-5DdUxOwM.js";import"./Icon-ClcJ2Ugl.js";import"./index-B41-Gq6i.js";import"./Skeleton-BFp1Ns5z.js";import"./Badge-B5rN9dZh.js";import"./Tooltip-D2U0c2nY.js";import"./tooltip-C1z0ba6x.js";import"./Section-BW54BVJv.js";import"./Flex-BUJ7sT5C.js";import"./Heading-C2AVc7ZV.js";import"./useHighlightedText-TWz6a-kb.js";import"./TransmissionList-CFZWXSTa.js";import"./Transmission-GSN19MdN.js";import"./Typography-BtAt1mkJ.js";import"./SeenByLog-C-kVmao2.js";import"./SeenByLogButton-oVl-Q3NJ.js";import"./Button-DJyTPLgL.js";import"./AvatarGroup-CngdFV9S.js";import"./Avatar-Bfhk-MsW.js";import"./SeenByLogItem-XKdwlI-t.js";import"./Byline-59VzS1l1.js";import"./Divider-CqvPaPTt.js";import"./DialogActions-B-Sus0Bj.js";import"./ButtonGroupDivider-C3K0uMrd.js";import"./ChevronUp-BXoYzDan.js";import"./ChevronDown-CFXYCpRP.js";import"./DropdownBase-BhlY3j5H.js";import"./useClickOutside-B5CiPhtd.js";import"./ButtonGroup-C2Onw-9a.js";import"./SearchField-CSvKC2kE.js";import"./MagnifyingGlass-WQhuuXQl.js";import"./XMark-CJ_7TJfx.js";import"./FieldBase-C4PiPQJY.js";import"./Label--g4FWuur.js";import"./Input-944JhKVs.js";import"./MenuListItem-CpDZm8hJ.js";import"./MenuListHeading-DFXzzdQl.js";import"./MenuItem-B2ec7Awl.js";import"./ItemMedia-Bzb68dd0.js";import"./Checkmark-Cohtyyf2.js";import"./ItemControls-6sDFc5WV.js";import"./ChevronRight-BRam3foO.js";import"./useMenu-CglJcFc3.js";import"./index-DD5_FiA2.js";import"./InformationSquare-BqsScoMm.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-CToZfoEW.js";import"./Dropdown-3ScmWyOY.js";import"./MenuElipsisHorizontal-DLqsyN8R.js";import"./ItemLink-BpCtkCJ8.js";import"./DialogByline-DF2v5E_D.js";import"./DialogMetadata-C4ugw0DP.js";import"./DialogStatus-BqYrSNHz.js";import"./MetaItem-D-RS_2F0.js";import"./ProgressIcon-BZ9YqAPZ.js";import"./Paperclip-DSqVpQqK.js";import"./Files-DJI95PEv.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
