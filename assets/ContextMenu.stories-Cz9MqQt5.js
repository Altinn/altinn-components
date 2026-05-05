import{j as t}from"./iframe-0tjTS8nX.js";import{S as b}from"./ArrowRedo-DPKV8tp9.js";import{S as v}from"./EyeClosed-BVlgMx3s.js";import{S as I}from"./Archive-CxbiNxAX.js";import{S as k}from"./Trash-BerJMn2e.js";import{S as w}from"./ClockDashed-Dt4Rg0dq.js";import{S as l}from"./TeddyBear-BTFAfvmM.js";import{i as u}from"./inboxSearchResults-C6DPyb7L.js";import{C as r}from"./ContextMenu-fefVb9IK.js";import{L as x}from"./List-lf1yby5Z.js";import{L as d}from"./ListItem-BchTOoTJ.js";import{D as g}from"./DialogListItem-BGcd5JMv.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DNFZveVv.js";import"./dialogs-CTxvy-1N.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-D5Aq21aN.js";import"./AttachmentList-ChG_Mgjb.js";import"./AttachmentLink-Cz1YWaMu.js";import"./Icon-CEoRGh9j.js";import"./index-BHkRJabC.js";import"./Skeleton-CiSYBb75.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./Section-CVxfq1Zs.js";import"./Flex-BjLBa1JB.js";import"./Heading-KoSbgrW3.js";import"./useHighlightedText-D9Q4aeek.js";import"./TransmissionList-HJrk-rbE.js";import"./Transmission-BkoZtpEk.js";import"./Typography-dEwOKrOW.js";import"./SeenByLog-CK2pkm3q.js";import"./SeenByLogButton-BoXvVtns.js";import"./Button-CyTdDQsP.js";import"./button-Cld0y5Q3.js";import"./AvatarGroup-Cy536atj.js";import"./Avatar-DBihd_YJ.js";import"./SeenByLogItem-B3eLA7Q-.js";import"./Byline-B7hF81ln.js";import"./Divider-BpiCxUGI.js";import"./DialogActions-GTlRzC78.js";import"./ButtonGroupDivider-D8a_Wdd9.js";import"./ChevronUp-DEUjkNQ0.js";import"./ChevronDown-OiQKbBEs.js";import"./DropdownBase-DCgjF-31.js";import"./useClickOutside-zDbhPu4s.js";import"./ButtonGroup-Rh1_zGFF.js";import"./SearchField-AyG5Put8.js";import"./MagnifyingGlass-Djl9xGro.js";import"./XMark-C6HGzv3s.js";import"./FieldBase-B4LLLb6y.js";import"./Label-DeD3NEAn.js";import"./index-BkdSX7Id.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuListHeading-BfXt7Oa1.js";import"./MenuItem-Dq38BSWn.js";import"./ItemMedia-DYrXvlN2.js";import"./Checkmark-DcFVdWi8.js";import"./ItemControls-C9C9Xohr.js";import"./ChevronRight-DKBz6hgL.js";import"./useMenu-DGQxaY-L.js";import"./InformationSquare-j6Jk7iQg.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DtWTzaBl.js";import"./Dropdown-Cwwtm8XG.js";import"./MenuElipsisHorizontal-C3l-dan1.js";import"./ItemLink-Rfzdlob3.js";import"./DialogByline-BOti3C92.js";import"./DialogMetadata-BIvx_ZfU.js";import"./DialogStatus-RVM2mb_L.js";import"./MetaItem-CtbR6J2X.js";import"./ProgressIcon-sgpLCTmc.js";import"./Paperclip-DA5GGRz-.js";import"./Files-D0f--acP.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Wt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
