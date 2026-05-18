import{j as t}from"./iframe-Bk_HwK4l.js";import{S as b}from"./ArrowRedo-BeErwtHB.js";import{S as v}from"./EyeClosed-D0Sg2b7k.js";import{S as I}from"./Archive-Cxwz0IDr.js";import{S as k}from"./Trash-D4QcHzdr.js";import{S as w}from"./ClockDashed-7cETgVqe.js";import{S as l}from"./TeddyBear-7P2U5cy-.js";import{i as u}from"./inboxSearchResults-BWjWgQbE.js";import{C as r}from"./ContextMenu-Ddpj-J5p.js";import{L as x}from"./List-CjSgHfl7.js";import{L as d}from"./ListItem-BC_fsWR_.js";import{D as g}from"./DialogListItem-_Am4fwXz.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-WArpTTRC.js";import"./dialogs-BF7K90Kq.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-XdOrWYSE.js";import"./AttachmentList-CwxuaxTc.js";import"./AttachmentLink-6ZQd146Y.js";import"./Icon-BbsTdu7G.js";import"./index-Bj80ru-z.js";import"./Skeleton-CZ4GHxMp.js";import"./Badge-s1Xx1f1P.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./Section-DaLGW2Wx.js";import"./Flex-CqtyDzLK.js";import"./Heading-D6li-Zgs.js";import"./useHighlightedText-BjD5CEaG.js";import"./TransmissionList-BzSryDgj.js";import"./Transmission-BO-OVqOM.js";import"./Typography-9_XA-VKE.js";import"./SeenByLog-CGJHaTLX.js";import"./SeenByLogButton-_4e8jo2J.js";import"./Button-DXv-zg1S.js";import"./button-DRIhbrAI.js";import"./AvatarGroup-CkGvw6sL.js";import"./Avatar-B1R5c004.js";import"./SeenByLogItem-DcZdDBCt.js";import"./Byline-BO0Xb7Bu.js";import"./Divider-CfSSF27g.js";import"./DialogActions-coRTHaLw.js";import"./ButtonGroupDivider-Cky36suu.js";import"./ChevronUp-DmnNnXSw.js";import"./ChevronDown-Butud2ye.js";import"./DropdownBase-DNWpk13Q.js";import"./useClickOutside-D1Jlb684.js";import"./ButtonGroup-IyhiSPmN.js";import"./SearchField-CcfOce7B.js";import"./MagnifyingGlass-BtHw2Y5y.js";import"./XMark-BlM7H2uk.js";import"./FieldBase-zuKERQJx.js";import"./Label-D1l41OtR.js";import"./index-RvDLUlZV.js";import"./Input-kPMzbuYu.js";import"./input-6lO9tGv_.js";import"./MenuListItem-p80RBs_A.js";import"./MenuListHeading-RVi62nau.js";import"./MenuItem-BW0J3eqZ.js";import"./ItemMedia-QvgC3e5a.js";import"./Checkmark-BwmprQFp.js";import"./ItemControls-DoACt_K_.js";import"./ChevronRight-BEdxYQXL.js";import"./useMenu-BNIm_aif.js";import"./index-BL_SwWgZ.js";import"./InformationSquare-D1WxufmY.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController--BMHU_Uw.js";import"./Dropdown-DDGzAAFH.js";import"./MenuElipsisHorizontal-Dp80SMX0.js";import"./ItemLink-C7GmrZNk.js";import"./DialogByline-Boaq5RXj.js";import"./DialogMetadata-Bm8UBrSI.js";import"./DialogStatus-CfyYnzu7.js";import"./MetaItem-BdzNCpQ_.js";import"./ProgressIcon-BjPHd8nJ.js";import"./Paperclip-D1BNdJQZ.js";import"./Files-CTckWWv1.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
