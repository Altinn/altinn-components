import{j as t}from"./iframe-V8BRfBgT.js";import{S as b}from"./ArrowRedo-Bc1Yi2jn.js";import{S as v}from"./EyeClosed-B5o7rRoa.js";import{S as I}from"./Archive-DYvBW6Wd.js";import{S as k}from"./Trash-BZTx2yoj.js";import{S as w}from"./ClockDashed-C2nR6RxU.js";import{S as l}from"./TeddyBear-DRZxrpzJ.js";import{i as u}from"./inboxSearchResults-B73nZDbN.js";import{C as r}from"./ContextMenu-D6_jywBP.js";import{L as x}from"./List-DZ-oUhHw.js";import{L as d}from"./ListItem-BYbxtLr3.js";import{D as g}from"./DialogListItem-C5S9Q1Yb.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Cpax_hNq.js";import"./dialogs-D1PNXhBC.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DLkce8Eh.js";import"./AttachmentList-UkE4an4-.js";import"./AttachmentLink-BirUutFB.js";import"./Icon-BWOTtVf8.js";import"./index-Dg3z2A9f.js";import"./Skeleton-BQtaEJM-.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";import"./Section-BCm3_cLa.js";import"./Flex-Cr7oVI5u.js";import"./Heading-CGSCg4GY.js";import"./useHighlightedText-DnT87ATC.js";import"./TransmissionList-pYIW9cGK.js";import"./Transmission-nSBEnHI3.js";import"./Typography-BiIpQq_S.js";import"./SeenByLog-BxkuIhUh.js";import"./SeenByLogButton-UnbfbvV7.js";import"./Button-BlxzDMPI.js";import"./button-2-meUg78.js";import"./AvatarGroup-KHWc8S2T.js";import"./Avatar-BDDvrYzF.js";import"./SeenByLogItem-B8Vuy5ec.js";import"./Byline-C_Ji-SMs.js";import"./Divider-CyBU1eNU.js";import"./DialogActions-dlVHnB6I.js";import"./ButtonGroupDivider-DCIj-SRz.js";import"./ChevronUp-DYD-_Lcf.js";import"./ChevronDown-Dj082slW.js";import"./DropdownBase-DKlve9xp.js";import"./useClickOutside-DBZpkR-8.js";import"./ButtonGroup-GmtwjaC0.js";import"./SearchField-D2AXVYp0.js";import"./MagnifyingGlass-DvXaPbUD.js";import"./XMark-C45HvrEl.js";import"./FieldBase-DENJ-wBn.js";import"./Label-DdQ1zxpY.js";import"./index-ByKBsU4r.js";import"./Input-zOuJx9ZS.js";import"./input-1VpPOyjR.js";import"./MenuListItem-Ckqn-jsk.js";import"./MenuListHeading-nXDmyZ7G.js";import"./MenuItem-DQUORZa0.js";import"./ItemMedia-C3tA4Zzy.js";import"./Checkmark-BKwfqVUb.js";import"./ItemControls-BctCfWNT.js";import"./ChevronRight-Cz_uty1S.js";import"./useMenu-D2cFOQcG.js";import"./index-84oeY8HP.js";import"./InformationSquare-Bxq9CYlT.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-B5tdkj26.js";import"./Dropdown-ChJd6AE_.js";import"./MenuElipsisHorizontal-DkUfYG-z.js";import"./ItemLink-B6sA5uMo.js";import"./DialogByline-CDZx2hIJ.js";import"./DialogMetadata-Tfw6_Zav.js";import"./DialogStatus-CuK7lGPo.js";import"./MetaItem-XqJK-m8B.js";import"./ProgressIcon-C-2cgri9.js";import"./Paperclip-mS0UE-dC.js";import"./Files-B5Kidhb2.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
