import{j as t}from"./iframe-Nkxls2w0.js";import{S as a}from"./Handshake-DAPbMwEe.js";import{S as e}from"./Bell-CEK3Kam3.js";import{S as s}from"./Hashtag-DM9t2LaG.js";import{S as n}from"./Files-a7MOY8QZ.js";import{A as p}from"./AccountListItem-Bk1RSAXl.js";import{L as m}from"./List-DohYrZsw.js";import{A as l}from"./AccountListItemDetails-D_ThLj0y.js";import{B as c}from"./Button-Ds9vuGVD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C8J5yFeN.js";import"./ListItem-DrUvpHxd.js";import"./index-M4TkGQLb.js";import"./Input-BDHdvqI3.js";import"./input-MPZybUVd.js";import"./lite-DaUVFjkg.js";import"./XMark-D-ALqV0n.js";import"./Icon-qDX4JAC4.js";import"./Skeleton-DNS4c1Rp.js";import"./Avatar-BDGJojEv.js";import"./AvatarGroup-BM9A-Bel.js";import"./Badge-Ipym1qsE.js";import"./Tooltip-sxtJg_qK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-NASGeav9.js";import"./Heading-AZ4WQ_-Y.js";import"./useHighlightedText-BtUjP4Uj.js";import"./ChevronUp-UjgZK29V.js";import"./ChevronDown-DGUtPuYx.js";import"./ChevronRight-Bcpq3qt2.js";import"./HeartFill-DW-S_Xm4.js";import"./ContextMenu-BNXGj103.js";import"./useDropdownMenuController-BB48Tjgy.js";import"./Dropdown-D5aFsl9a.js";import"./MenuElipsisHorizontal-CFVZ-H4Q.js";import"./SearchField-Bb3Ffka2.js";import"./MagnifyingGlass-k_g2FxNc.js";import"./FieldBase-Drb41XPf.js";import"./Typography-CZZfCvh6.js";import"./Label-DRBFvXSF.js";import"./index-Bvwkp7W_.js";import"./MenuListItem-Cfh5A6HZ.js";import"./MenuListHeading-CEofuJGo.js";import"./MenuItem-edMrv6Qw.js";import"./ItemMedia-CsEr1Zw1.js";import"./Checkmark-DHusaxnp.js";import"./ItemControls-BH6jrH_o.js";import"./useMenu-WCeLZ4vF.js";import"./InformationSquare-zR5D--CT.js";import"./Flex-BbiGghB8.js";import"./Section-DtOfuDKh.js";import"./ButtonGroup-HCy2ouFP.js";import"./Divider-ymGzUq0F.js";import"./SettingsItem-CdJjW45c.js";import"./SettingsItemBase-AQpsglss.js";import"./ItemLink-CJbh8GaA.js";import"./SettingsModal-CxkoOWEY.js";import"./ModalBody-BW4Wp4B4.js";import"./ButtonIcon-Du8IWwj9.js";import"./ButtonLabel-CHOaFLZI.js";import"./AccountOrganization-BlTnSv8p.js";import"./Byline-CpP3L2XY.js";import"./button-CK59nDyy.js";const Dt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ft=["Default","Expanded"];export{r as Default,i as Expanded,ft as __namedExportsOrder,Dt as default};
