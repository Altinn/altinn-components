import{a7 as t,c as o}from"./iframe-BmEoWqRz.js";import{S as s}from"./Handshake-Ce8lIjFW.js";import{S as e}from"./Bell-C25k69Ny.js";import{S as n}from"./Hashtag-B-dh1hbK.js";import{S as p}from"./Files-DjzBTIXm.js";import{A as l}from"./AccountListItem-BIWytYKu.js";import{A as m}from"./AccountListItemDetails-Ocd9UW2F.js";import{L as c}from"./List-B_joIc0t.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-Dqx_OQ9-.js";import"./Input-DDCcqldd.js";import"./Avatar-B-ArKV_z.js";import"./AvatarGroup-D8IOgHe3.js";import"./Badge-LAUy9dv8.js";import"./Tooltip-Bf6BoxU7.js";import"./Heading-CSNATJ_q.js";import"./useHighlightedText-_GRR2uH-.js";import"./ChevronUp-BklxGwTc.js";import"./ChevronDown-5iss_T7m.js";import"./ChevronRight-CG1CTQrY.js";import"./HeartFill-D4e221bt.js";import"./ContextMenu-CA9PQsOj.js";import"./useDropdownMenuController-D-8bCjIT.js";import"./Dropdown-DCNQ961w.js";import"./SearchField-C1uLMLLi.js";import"./MagnifyingGlass-QgwWPsJq.js";import"./FieldBase-T_Ol0Ej6.js";import"./Typography-BVfh1yLf.js";import"./Field-DXYDb7rc.js";import"./Label-BXdvGr24.js";import"./useMenu-C68PXoRq.js";import"./MenuListItem-B5VngT1X.js";import"./MenuListDivider-FJd_PUPB.js";import"./MenuListHeading-md5j_QVK.js";import"./MenuItem-BdKylwZo.js";import"./ItemMedia-Db3gcn7a.js";import"./Checkmark-D1L9L_AM.js";import"./ItemLabel-Aob4vZQG.js";import"./ItemControls-Y4OIpieN.js";import"./InformationSquare-CFFqTuvm.js";import"./MenuElipsisHorizontal-CCU4AlZR.js";import"./Section-BwWH83Jj.js";import"./Flex-CErGdajF.js";import"./ButtonGroup-Bag4W9on.js";import"./Divider-3tC3wFvg.js";import"./SettingsItem-CVbBzQze.js";import"./SettingsItemBase-D04YoY0W.js";import"./ItemBase-C6W6-0wj.js";import"./ItemLink-Bn8J_UL7.js";import"./SettingsModal-CFu-CX2C.js";import"./ModalBody-CAKbVWLZ.js";import"./ButtonIcon-Bl6aXluP.js";import"./ButtonLabel-BEXQQUYk.js";import"./AccountOrganization-C382P4vf.js";import"./Byline-CmyK_i-T.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
