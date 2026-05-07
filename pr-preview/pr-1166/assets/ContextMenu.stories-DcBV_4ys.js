import{j as t}from"./iframe-u1jxS1Oq.js";import{S as b}from"./ArrowRedo-YTTygCxh.js";import{S as v}from"./EyeClosed-BflClnYe.js";import{S as I}from"./Archive-D39xL0Dv.js";import{S as k}from"./Trash-DU2X0jmR.js";import{S as w}from"./ClockDashed-DrfyQtNS.js";import{S as l}from"./TeddyBear-MgPZAEXY.js";import{i as u}from"./inboxSearchResults-d55Bz_6I.js";import{C as r}from"./ContextMenu-1wVNrnh1.js";import{L as x}from"./List-C92-pb3T.js";import{L as d}from"./ListItem-jEtnNQRv.js";import{D as g}from"./DialogListItem-DwZpWTsi.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-MxiBxM6f.js";import"./dialogs-B-1ZguiB.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C0H3ImEI.js";import"./AttachmentList-ILO8gR9H.js";import"./AttachmentLink-C37gHfSL.js";import"./Icon-DjXLk3vD.js";import"./index-CuIYfQx6.js";import"./Skeleton-vSjDGrjA.js";import"./Badge-DEnx77R3.js";import"./Tooltip-DbCog91V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-DeN80SPN.js";import"./lite-DaUVFjkg.js";import"./Section-Dvplgvae.js";import"./Flex-CjSLdTf-.js";import"./Heading-B6H8IHeT.js";import"./useHighlightedText-Cgx_Ij05.js";import"./TransmissionList-NQZ9C63G.js";import"./Transmission-Dsn97dpT.js";import"./Typography-DJdlSKXp.js";import"./SeenByLog-BTIPkisy.js";import"./SeenByLogButton-mF71FL2V.js";import"./Button-BY9-KzE0.js";import"./button-CanOz9MC.js";import"./AvatarGroup-B0Rqd5X-.js";import"./Avatar-DVgGPyAb.js";import"./SeenByLogItem-Bkf-TN87.js";import"./Byline-DKwqHN77.js";import"./Divider-DwqD2ecz.js";import"./DialogActions-DMpEt8G_.js";import"./ButtonGroupDivider-BZKqv01B.js";import"./ChevronUp-D1SaIjFK.js";import"./ChevronDown-CLYLhVpz.js";import"./DropdownBase-DNkGOC_5.js";import"./useClickOutside-BwE8e8sK.js";import"./ButtonGroup-DTQJ7yTP.js";import"./SearchField-BwnvpNr2.js";import"./MagnifyingGlass-5wf6qRdO.js";import"./XMark-Bsujigqn.js";import"./FieldBase-BcXnInHB.js";import"./Label-D4ujXpAq.js";import"./index-Cx6LUCQB.js";import"./Input-BNqEyP7x.js";import"./input-y4RbUeVJ.js";import"./MenuListItem-BGYFPBt-.js";import"./MenuListHeading-BoIZ0dV_.js";import"./MenuItem-CRFWvbZF.js";import"./ItemMedia-Dn5ydfd9.js";import"./Checkmark-CapblMXW.js";import"./ItemControls-GTSartAy.js";import"./ChevronRight-Dx4m7R44.js";import"./useMenu-CJJuJq3h.js";import"./InformationSquare-C97_OpNa.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-CqFMkV_m.js";import"./Dropdown-CanQZVjK.js";import"./MenuElipsisHorizontal-BgSAjww8.js";import"./ItemLink-kNypsHgk.js";import"./DialogByline-BXUa4_2T.js";import"./DialogMetadata-DOLuGBkZ.js";import"./DialogStatus-DZQVjGL7.js";import"./MetaItem-BF_z0cLp.js";import"./ProgressIcon-DsEcRWHd.js";import"./Paperclip-DWGKTEMb.js";import"./Files-CuPRHeti.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Wt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
