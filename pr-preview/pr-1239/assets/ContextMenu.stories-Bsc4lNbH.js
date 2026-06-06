import{a7 as t}from"./iframe-azCfu0oF.js";import{S as b}from"./ArrowRedo-BYuhbU1L.js";import{S as v}from"./EyeClosed-Cgm3qiUW.js";import{S as I}from"./Archive-Brae8BXQ.js";import{S as k}from"./Trash-4gML0aCb.js";import{S as w}from"./ClockDashed-DU4j5opN.js";import{C as i}from"./ContextMenu-B48YoW8-.js";import{i as l}from"./inboxSearchResults-CuvzpV4g.js";import{S as u}from"./TeddyBear-BSnGPadB.js";import{L as x}from"./List-BJ8sIySu.js";import{D as d}from"./DialogListItem-40WoZlva.js";import{L as g}from"./ListItem-BaYTZi8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-Ds5tbgH_.js";import"./Dropdown-CZ8Ag1Ok.js";import"./SearchField-BxcNLwFn.js";import"./MagnifyingGlass-sqIKuSMh.js";import"./FieldBase-CGNAcfuA.js";import"./Typography-CWMVViTm.js";import"./useHighlightedText-BA5UWeOm.js";import"./Field-DqJ_4ymP.js";import"./Label-Fg6nLSp0.js";import"./Input-B4WsPqAp.js";import"./useMenu-BCjKWSQ9.js";import"./MenuListItem-BqMqYYtc.js";import"./MenuListHeading-Be6eRNXB.js";import"./MenuItem-DQe7kQkg.js";import"./ItemMedia-BlulKlBL.js";import"./Avatar-B6mgyHuO.js";import"./AvatarGroup-BFb9xeKa.js";import"./Checkmark-DMfmeL08.js";import"./ItemLabel-CkTR7bil.js";import"./Heading-BxIru1wm.js";import"./ItemControls-D1geOcjK.js";import"./Badge-CtmzFrHa.js";import"./Tooltip-DFhjbzqi.js";import"./ChevronRight-DmbA9yvG.js";import"./index-BVE0v-uN.js";import"./InformationSquare-jmbeCJCU.js";import"./MenuElipsisHorizontal-CTevO2o7.js";import"./dialogs-9IGnLOPX.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DpEVZD-s.js";import"./AttachmentList-Dl3wUUHR.js";import"./AttachmentLink-DzyrhAep.js";import"./File-J7MWU-e7.js";import"./Section-cdVnHieS.js";import"./Flex-Dtc9ln1d.js";import"./TransmissionList-DoOO6V9x.js";import"./Transmission-BltcPQMV.js";import"./SeenByLog-DwVPppN1.js";import"./SeenByLogButton-PDznGy7F.js";import"./SeenByLogItem-D1ej895b.js";import"./Byline-CmE-rGGD.js";import"./Divider-nsYtSn1Q.js";import"./DialogActions-DfQkz-Sw.js";import"./ButtonGroupDivider-pw-6OYtl.js";import"./ChevronUp-_1tTwlgk.js";import"./ChevronDown-D-2Ujwox.js";import"./DropdownBase-DXDn5KFq.js";import"./useClickOutside-Bm2S5MTr.js";import"./ButtonGroup-n2_tAFRz.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DvAzRiVb.js";import"./ItemLink-iPqP_Q-k.js";import"./DialogByline-Cc8jNhIw.js";import"./DialogMetadata-pToroTyr.js";import"./DialogStatus-Cp7xRk5I.js";import"./MetaItem-Dlu0Nb_h.js";import"./ProgressIcon-DPclnZPa.js";import"./Paperclip-zjNVtAuJ.js";import"./Files-ChxKhXRJ.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
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
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
